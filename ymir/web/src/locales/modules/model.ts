const model = {
  'model.detail.title': { en: 'Model Detail', cn: '模型详情' },
  'model.diagnose': { en: 'Result Analysis', cn: '结果分析' },
  'model.management': { en: 'Model Management', cn: '模型管理' },
  'model.list': { en: 'Model List', cn: '模型列表' },
  'model.column.name': { en: 'Version', cn: '版本' },
  'model.column.source': { en: 'Source', cn: '来源' },
  'model.column.target': { en: 'Target', cn: '训练目标' },
  'model.column.map': { en: 'mAP', cn: '精度均值(mAP)' },
  'model.column.stage': { en: 'Intermediate', cn: '中间模型' },
  'model.column.create_time': { en: 'Create Time', cn: '创建时间' },
  'model.column.action': { en: 'Actions', cn: '操作' },
  'model.action.download': { en: 'Download', cn: '下载' },
  'model.action.verify': { en: 'Verify', cn: '验证' },
  'model.action.publish': { en: 'Publish', cn: '发布' },
  'model.empty.label': { en: 'Train A Model', cn: '训练出一个模型' },
  'model.empty.btn.label': { en: 'Import Model', cn: '导入模型' },
  'model.import.label': { en: 'Import Model', cn: '导入模型' },
  'model.query.name': { en: 'Model Name', cn: '模型名称' },
  'model.action.del.confirm.content': { en: 'Are you sure to delete this model version:{name}?', cn: '确认要删除模型版本：{name}？' },
  'model.action.delgroup.confirm.content': {
    en: 'Are you sure to remove this model:{name}, all of versions will be deleted.',
    cn: '确认要删除模型：{name}？这个操作将删除此模型下的所有版本',
  },
  'model.query.name.placeholder': { en: 'Model Name', cn: '模型名称' },
  'model.pager.total.label': { en: 'Total {total} items', cn: '共 {total} 项' },
  'model.detail.label.name': { en: 'Model Name', cn: '模型名称' },
  'model.detail.label.map': { en: 'mAP', cn: 'mAP值' },
  'model.detail.label.stage': { en: 'Intermediates', cn: '中间模型' },
  'model.detail.label.source': { en: 'Source', cn: '模型来源' },
  'model.detail.label.image': { en: 'Train Image', cn: '训练镜像' },
  'model.detail.label.training_dataset': { en: 'Training Dataset', cn: '训练集' },
  'model.detail.label.test_dataset': { en: 'Validation Dataset', cn: '验证集' },
  'model.detail.label.train_type': { en: 'Train Type', cn: '训练类型' },
  'model.detail.label.train_goal': { en: 'Target', cn: '训练目标' },
  'model.detail.label.framework': { en: 'Network', cn: '算法框架' },
  'model.detail.label.backbone': { en: 'Backbone', cn: '骨干网络结构' },
  'model.add.types.copy': { en: 'Share', cn: '复制模型' },
  'model.add.types.net': { en: 'Net', cn: '网络导入' },
  'model.add.types.local': { en: 'Local', cn: '本地导入' },
  'model.add.success': { en: 'Import model success!', cn: '导入模型成功！' },
  'model.add.form.name': { en: 'Name', cn: '名称' },
  'model.add.form.name.placeholder': { en: 'Model Name', cn: '请输入模型名称' },
  'model.add.form.type': { en: 'Import Type', cn: '导入类型' },
  'model.add.form.project': { en: 'Select Model', cn: '选择模型' },
  'model.add.form.upload.btn': { en: 'Upload', cn: '上传文件' },
  'model.add.form.url': { en: 'Url', cn: 'URL地址' },
  'model.add.form.url.help': { en: 'E.g. https://github.com/yolo5_model/cat', cn: '示例：https://github.com/yolo5_model/cat' },
  'model.add.form.url.tip': { en: 'Please input valid url for model', cn: '请输入正确的网络地址，指向模型文件' },
  'model.add.form.url.placeholder': { en: 'Please input model url from internet', cn: '请输入模型文件的网络地址' },
  'model.file.required': { en: 'Please upload model', cn: '请上传模型' },
  'model.add.form.upload.info': {
    en: `1. Only support model generating on YMIR; {br} 2. Size <= {max}M. 3. Please import model corresponding to {objectType}`,
    cn: `1. 仅支持YMIR系统产生的模型；{br} 2. 上传文件应小于 {max}MB {br} 3. 请导入{objectType}对应的模型`,
  },
  'model.verify.upload.info': { cn: '支持jpg, png, bmp格式, 图片大小 < {size}M', en: 'Support *.jpg, *.png, *.bmp, size < {size}M' },
  'model.verify.confidence': { cn: '置信度', en: 'Confidence' },
  'model.verify.upload.label': { cn: '上传图片', en: 'Upload Image' },
  'model.verify.model.info.title': { cn: '模型信息', en: 'Model Info.' },
  'model.verify.model.param.title': { cn: '参数调整', en: 'Parameter Adjustment' },
  'model.verify.model.param.fold': { cn: '点击收起', en: 'Fold' },
  'model.verify.model.param.unfold': { cn: '点击展开', en: 'Unfold' },
  'model.verify.upload.tip': { cn: '模型验证需要较长时间，请耐心等待', en: 'Verification need more time, be patient...' },
  'model.diagnose.tab.metrics': { cn: '精度度量', en: 'Metrics' },
  'model.diagnose.tab.training': { cn: '训练过程', en: 'Training Fitting' },
  'model.diagnose.tab.infer_datasets': { cn: '推理结果', en: 'Predictions' },
  'model.diagnose.form.model': { cn: '诊断模型', en: 'Diagnosing Models' },
  'model.diagnose.form.testset': { cn: '测试集', en: 'Testing Datasets' },
  'model.diagnose.form.confidence': { cn: '置信度', en: 'Confidence' },
  'model.diagnose.form.iou': { cn: '请输入mAP计算方式', en: 'mAP Calculation' },
  'model.diagnose.form.iou.everage': { cn: '插值计算', en: 'Interpolation' },
  'model.diagnose.form.iou.single': { cn: '单点计算', en: 'Single Point' },
  'model.diagnose.form.iou.everage.tip': {
    cn: `COCO数据集上的衡量标准，
  含义为IOU阈值（检测框与标准框值的IOU大于该阈值时认为是正样本）
  从0.5到0.95逐步递增0.05时共10个IOU阈值下的mAP的平均值。`,
    en: `Interpolation: Metrics on the COCO dataset,
    It means IOU threshold value 
    (when IOU of detection box and standard box is greater than this threshold value, it is considered as positive sample)
    The average value of mAP under 10 IOU thresholds is gradually increased by 0.05 from 0.5 to 0.95.`,
  },
  'model.diagnose.form.iou.single.tip': {
    cn: '单点计算：某个选定IOU阈值下的多个类别的平均AP值。',
    en: 'Average AP value of multiple categories under a selected IOU threshold',
  },
  'model.diagnose.restart': { cn: '重新比对', en: 'Compare Again' },
  'model.action.diagnose.training.retry': { cn: '重新诊断', en: 'Retry' },
  'model.diagnose.label.model': { cn: '模型', en: 'Models' },
  'model.diagnose.label.testing_dataset': { cn: '测试集', en: 'Testing Datasets' },
  'model.diagnose.label.config': { cn: '推理配置', en: 'Inference Config' },
  'model.diagnose.stage.label': { cn: '设置中间模型', en: 'Set Recommended Intermediate' },
  'model.diagnose.metrics.precision.label': { cn: '精确率', en: 'Precision' },
  'model.diagnose.metrics.precision.average.label': { cn: '平均召回率', en: 'Average Recall' },
  'model.diagnose.metrics.precision.target.label': { cn: '{label}召回率 | 置信度', en: '{label} Recall | Confidence' },
  'model.diagnose.metrics.recall.label': { cn: '召回率', en: 'Recall' },
  'model.diagnose.metrics.recall.average.label': { cn: '平均精确率', en: 'Average Precision' },
  'model.diagnose.metrics.recall.target.label': { cn: '{label}精确率 | 置信度', en: '{label} Precision | Confidence' },
  'model.diagnose.metrics.confidence.average.label': { cn: '平均置信度', en: 'Average Confidence' },
  'model.diagnose.medtric.tabs.ap': { cn: 'mAP', en: 'mAP' },
  'model.diagnose.medtric.tabs.iou': { cn: 'mIoU', en: 'mIoU' },
  'model.diagnose.medtric.tabs.acc': { cn: 'mAcc', en: 'mAcc' },
  'model.diagnose.medtric.tabs.maskap': { cn: 'maskAP', en: 'maskAP' },
  'model.diagnose.medtric.tabs.boxap': { cn: 'boxAP', en: 'boxAP' },
  'model.diagnose.medtric.tabs.curve': { cn: 'PR曲线', en: 'PR Curve' },
  'model.diagnose.medtric.tabs.rp': { cn: '指定召回率', en: 'Recall' },
  'model.diagnose.medtric.tabs.pr': { cn: '指定精确率', en: 'Precision' },
  'model.diagnose.metrics.ck.placeholder': { en: 'Please select a asset tag', cn: '请选择一类数据标签' },
  'model.diagnose.metrics.keyword.placeholder': { en: 'Please select classes', cn: '请选择类别' },
  'model.diagnose.metrics.view.label': { en: 'View', cn: '视图' },
  'model.diagnose.metrics.dimension.label': { en: 'Dimension:', cn: '维度：' },
  'model.diagnose.metrics.btn.start': { cn: '开始诊断', en: 'Diagnose' },
  'model.diagnose.metrics.btn.retry': { cn: '重新诊断', en: 'Retry' },
  'model.diagnose.v.tasks.require': { en: 'Please select infered testing dataset and config', cn: '请选择推理过的测试集及配置' },
  'model.diagnose.metrics.x.dataset': { en: 'Testing Dataset', cn: '测试集' },
  'model.diagnose.metrics.x.keyword': { en: 'Class', cn: '类别' },
  'model.list.batch.invalid': { en: 'Please select valid model to batch', cn: '请选择有效的模型进行批量操作' },
  'model.diagnose.metrics.tip.exceed.assets': { en: 'Datasets exceeding {max} are not supported for diagnosis', cn: '暂不支持超过{max}的数据集可视化评估诊断' },
  'model.diagnose.metrics.tip.exceed.classes': {
    en: 'Model classes exceeding {max} are not supported for diagnosis',
    cn: '暂不支持拥有超过{max}个类别的模型进行诊断',
  },
  'model.metrics.fpfn.unit': { en: '{num} Boxes', cn: '{num} 个' },
  'model.stage.metrics.primary.label.det': { en: 'mAP', cn: '精度均值(mAP)' },
  'model.stage.metrics.primary.label.seg': { en: 'mIoU', cn: '精度均值(mIoU)' },
  'model.stage.metrics.primary.label.ins': { en: 'maskAP', cn: '精度均值(maskAP)' },
}

export default model
