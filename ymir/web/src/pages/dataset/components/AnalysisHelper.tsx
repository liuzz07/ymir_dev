import { Popover, TableColumnType } from 'antd'
import { ReactNode } from 'react'

import t from '@/utils/t'
import { humanize, toFixed } from '@/utils/number'
import { ObjectType } from '@/constants/project'
import VersionName from '@/components/result/VersionName'

type AnnotationType = 'gt' | 'pred'
type ChartConfigType = {
  label: string
  sourceField: string
  totalField: string
  xUnit?: string
  renderEachX?: (x: any) => string
  color?: string[]
  customOptions?: {
    [key: string]: any
  }
  isXUpperLimit?: boolean
  annoType?: boolean
  xType?: string
  getSource?: (dataset: YModels.DatasetAnalysis) => Array<{ [key: string]: any }>
}
type ColumnType = TableColumnType<YModels.DatasetAnalysis>

const charts: { [key: string]: ChartConfigType } = {
  assetHWRatio: {
    label: 'dataset.analysis.title.asset_hw_ratio',
    sourceField: 'assetHWRatio',
    totalField: 'assetCount',
    color: ['#36CBCB', '#E8B900'],
  },
  assetArea: {
    label: 'dataset.analysis.title.asset_area',
    sourceField: 'assetArea',
    totalField: 'assetCount',
    xUnit: 'PX',
    renderEachX: (x: number) => `${x / 10000}W`,
    color: ['#36CBCB', '#F2637B'],
  },
  assetQuality: {
    label: 'dataset.analysis.title.asset_quality',
    sourceField: 'assetQuality',
    totalField: 'assetCount',
    color: ['#36CBCB', '#10BC5E'],
    isXUpperLimit: true,
  },
  areaRatio: {
    label: 'dataset.analysis.title.anno_area_ratio',
    sourceField: 'areaRatio',
    totalField: 'total',
    customOptions: {
      tooltipLabel: 'dataset.analysis.bar.anno.tooltip',
    },
    color: ['#10BC5E', '#E8B900'],
    isXUpperLimit: true,
  },
  keywords: {
    label: 'dataset.analysis.title.keyword_ratio',
    sourceField: 'keywordAnnotaitionCount',
    totalField: 'total',
    customOptions: {
      tooltipLabel: 'dataset.analysis.bar.anno.tooltip',
    },
    color: ['#2CBDE9', '#E8B900'],
    xType: 'attribute',
  },
  semanticKeywords: {
    label: 'dataset.analysis.title.keyword_ratio',
    sourceField: 'keywords',
    totalField: 'assetCount',
    customOptions: {
      tooltipLabel: 'dataset.analysis.bar.anno.tooltip',
    },
    color: ['#2CBDE9', '#E8B900'],
    xType: 'attribute',
  },
  keywordArea: {
    label: 'dataset.analysis.title.keyword_area',
    sourceField: 'keywordArea',
    totalField: 'totalArea',
    customOptions: {
      tooltipLabel: 'dataset.analysis.bar.area.tooltip',
    },
    xUnit: 'px',
    color: ['#2CBDE9', '#E8B900'],
    xType: 'attribute',
  },
  instanceArea: {
    label: 'dataset.analysis.title.instance_area',
    sourceField: 'instanceArea',
    totalField: 'total',
    customOptions: {
      tooltipLabel: 'dataset.analysis.bar.anno.tooltip',
    },
    xUnit: 'px',
    isXUpperLimit: true,
    color: ['#10BC5E', '#F2637B'],
  },
  crowdedness: {
    label: 'dataset.analysis.title.crowdedness',
    sourceField: 'crowdedness',
    totalField: 'assetCount',
    isXUpperLimit: true,
    color: ['#10BC5E', '#F2637B'],
  },
  complexity: {
    label: 'dataset.analysis.title.complexity',
    sourceField: 'complexity',
    totalField: 'assetCount',
    isXUpperLimit: true,
    color: ['#10BC5E', '#F2637B'],
  },
}

const getAnnotations = (item: YModels.DatasetAnalysis) => item.gt

const getColumns = (keys: string[]) => {
  const columns: { [key: string]: ColumnType } = {
    name: {
      title: title('dataset.analysis.column.name'),
      render: (_, record) => <VersionName result={record} />,
    },
    labeled: {
      title: title('dataset.analysis.column.labelled'),
      render: (_, record) => {
        const anno = getAnnotations(record)
        const labeled = record.assetCount - anno.negative
        return renderPop(labeled)
      },
      width: 80,
    },
    assetCount: {
      title: title('dataset.analysis.column.assets.count'),
      render: (assetCount) => renderPop(assetCount),
    },
    keywordsCount: {
      title: title('dataset.analysis.column.keywords.count'),
      render: (_, record) => Object.keys(getAnnotations(record).keywords).length,
    },
    averageKeywordsCount: {
      title: title('dataset.analysis.column.keywords.count.average'),
      render: (_, record) => {
        const keywords = getAnnotations(record).keywords
        const sum = Object.values(keywords).reduce((prev, current) => prev + current, 0)
        return toFixed(sum / record.assetCount, 2)
      },
    },
    annotationsCount: {
      title: title('dataset.analysis.column.annotations.total'),
      render: (_, record) => {
        const count = getAnnotations(record).total
        return renderPop(count)
      },
    },
    averageAnnotationsCount: {
      title: title('dataset.analysis.column.annotations.average'),
      render: (_, record) => toFixed(getAnnotations(record).average, 2),
    },
    annotationsAreaTotal: {
      title: title('dataset.analysis.column.annotations.area.total'),
      render: (_, record) => unit(getAnnotations(record).totalArea),
    },
    averageAnnotationsArea: {
      title: title('dataset.analysis.column.annotations.area.average'),
      render: (_, record) => {
        const total = getAnnotations(record).totalArea
        return unit(toFixed(total / record.assetCount, 2))
      },
    },
    instanceCount: {
      title: title('dataset.analysis.column.instances.total'),
      render: (_, record) => renderPop(getAnnotations(record).total),
    },
    averageInstanceCount: {
      title: title('dataset.analysis.column.instances.average'),
      render: (_, record) => {
        const total = getAnnotations(record).total
        return toFixed(total / record.assetCount, 2)
      },
    },
    cksCount: {
      title: title('dataset.analysis.column.cks.count'),
      render: (text, record) => record.cks?.subKeywordsTotal || 0,
    },
  }
  return keys.map((key) => ({ ...columns[key], dataIndex: key, ellipsis: true, align: 'center' }))
}

function renderPop(num: number) {
  const label = humanize(num)
  return (
    <Popover content={num}>
      <span>{label}</span>
    </Popover>
  )
}

function unit(value?: string | number, u = 'px', def: string | number = 0) {
  return value ? value + u : def + u
}

function title(str = '') {
  return <strong>{t(str)}</strong>
}

const getTableColumns = (objectType: YModels.ObjectType) => {
  const keys = (cols: string[]) => ['name', 'labeled', 'assetCount', 'keywordsCount', 'averageKeywordsCount', ...cols]
  const maps = {
    [ObjectType.ObjectDetection]: keys(['annotationsCount', 'averageAnnotationsCount', 'cksCount']),
    [ObjectType.SemanticSegmentation]: keys(['annotationsAreaTotal', 'averageAnnotationsArea']),
    [ObjectType.InstanceSegmentation]: keys(['instanceCount', 'averageInstanceCount']),
  }
  return getColumns(maps[objectType])
}

const getCharts = (objectType?: YModels.ObjectType, isAnnotation?: boolean) => {
  const maps = {
    [ObjectType.ObjectDetection]: ['complexity', 'keywords', 'areaRatio'],
    [ObjectType.SemanticSegmentation]: ['complexity', 'semanticKeywords', 'keywordArea'],
    [ObjectType.InstanceSegmentation]: ['complexity', 'keywords', 'crowdedness', 'instanceArea', 'keywordArea'],
  }
  const assetCharts = ['assetHWRatio', 'assetArea']
  const keys = objectType ? maps[objectType] : assetCharts
  return keys.map((key) => ({
    ...charts[key],
    getSource: (dataset: YModels.DatasetAnalysis) => (isAnnotation ? getAnnotations(dataset) : dataset),
  }))
}

export const getConfigByAnnotationType = (objectType: YModels.ObjectType) => {
  return {
    tableColumns: getTableColumns(objectType),
    assetChartConfig: getCharts(),
    annotationChartConfig: getCharts(objectType, true),
  }
}
