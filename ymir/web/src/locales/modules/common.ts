const common = {
  'common.top.menu.logout': { cn: '退出', en: 'Logout' },
  'common.top.menu.user': { cn: '个人中心', en: 'User' },
  'common.top.menu.community': { cn: '开源社区', en: 'GitHub' },
  'common.top.menu.home': { cn: '首页', en: 'Home' },
  'common.top.menu.project': { cn: '项目管理', en: 'Project' },
  'common.top.menu.keyword': { cn: '类别管理', en: 'Classes' },
  'common.top.menu.configure': { cn: '系统配置', en: 'Configure' },
  'common.top.menu.permission': { cn: '权限配置', en: 'Permission' },
  'common.top.menu.image': { cn: '我的镜像', en: 'My Images' },
  'common.top.menu.public_image': { cn: '镜像社区', en: 'Image Community' },
  'common.history.node.title': { cn: '节点详情', en: 'Node Detail' },
  'common.back': { cn: '返回', en: 'Back' },
  'common.editbox.action.edit': { cn: '编辑名称', en: 'Edit Name' },
  'common.editbox.name': { cn: '名称', en: 'Name' },
  'common.editbox.form.name.required': { cn: '要修改的名称不能为空', en: 'A new name is required' },
  'common.editbox.form.name.placeholder': { cn: '请输入新的名称', en: 'Please input a new name' },
  'common.editbox.desc': { cn: '备注', en: 'Description' },
  'common.editbox.form.desc.placeholder': { cn: '请输入新的备注', en: 'Please input description' },
  'common.guide.title': { cn: '模型优化操作指引', en: 'How to Optimize Model' },
  'common.guide.step1.title': { cn: '准备数据', en: 'Datasets' },
  'common.guide.step1.content': { cn: '进入数据集页面，导入或复制一个带标注的数据集。', en: 'Import trainset and testset on dataset page.' },
  'common.guide.step1.btn': { cn: '去导入', en: 'Import' },
  'common.guide.step2.title': { cn: '模型训练', en: 'Training' },
  'common.guide.step2.content': { cn: '创建训练任务，调整训练参数，生成一个初始模型。', en: 'Select a labelled dataset for creating a train task.' },
  'common.guide.step2.btn': { cn: '去训练', en: 'Train' },
  'common.guide.step3.title': { cn: '数据挖掘', en: 'Mining' },
  'common.guide.step3.content': { cn: '使用初始模型，在海量数据中挖掘出对模型优化最有利的数据。', en: 'Mine better data in unlabelled dataset.' },
  'common.guide.step3.btn': { cn: '去挖掘', en: 'Mining' },
  'common.guide.step4.title': { cn: '挖掘结果标注', en: 'Label' },
  'common.guide.step4.content': { cn: '针对挖掘出来的数据，进行标注，生成带标注的数据集。', en: 'Label mining data.' },
  'common.guide.step4.btn': { cn: '去标注', en: 'Label' },
  'common.guide.step5.title': { cn: '模型再训练', en: 'Train Again' },
  'common.guide.step5.content': {
    cn: '将标注后的结果和原数据集合并再训练，实现模型的优化。',
    en: 'Optimize model by training merging dataset of labelled and origin data.',
  },
  'common.guide.step6.title': { cn: '数据标注', en: 'Label' },
  'common.guide.step6.content': {
    cn: '针对原始数据集，进行标注，生成带标注的训练数据集。',
    en: 'Label original dataset, and generate annotations for training.',
  },
  'common.guide.nevershow': { cn: '下次不再显示', en: 'Never show again' },
  'common.qa.action.import': { cn: '导入{br}数据集', en: 'Import Dataset' },
  'common.qa.action.train': { cn: '训练{br}模型', en: 'Train Model' },
  'common.qa.action.guide': { cn: '操作{br}指引', en: 'Guide' },
  'common.empty.keywords': { cn: '无类别', en: 'None' },
  'common.modify': { cn: '修改', en: 'Modify' },
  'common.all': { cn: '全部', en: 'All' },
  'common.yes': { cn: '是', en: 'Yes' },
  'common.no': { cn: '否', en: 'No' },
  'common.hot': { cn: '最热', en: 'Hot' },
  'common.latest': { cn: '最新', en: 'Latest' },
  'common.uploader.format.error': { cn: '上传文件格式不正确', en: 'Invalid format' },
  'common.uploader.size.error': { cn: '文件大小最大不超过 {max}MB', en: 'File must smaller than {max}MB!' },
  'common.action': { cn: '操作', en: 'Action' },
  'common.state': { cn: '状态', en: 'State' },
  'common.del': { cn: '删除', en: 'Delete' },
  'common.key': { cn: '键', en: 'Key' },
  'common.value': { cn: '值', en: 'Value' },
  'common.recommend.keyword.label': { cn: '常用类别', en: 'Recommend Classes' },
  'common.index.keyword.label': { cn: '类别', en: 'Classes' },
  'common.view': { cn: '查看', en: 'View' },
  'common.step.next': { cn: '下一步', en: 'Next' },
  'common.skip': { cn: '跳过', en: 'Skip' },
  'common.confirm': { cn: '确定', en: 'OK' },
  'common.cancel': { cn: '取消', en: 'Cancel' },
  'common.done': { cn: '已完成', en: 'Done' },
  'common.action.train': { cn: '训练', en: 'Train' },
  'common.action.mining': { cn: '挖掘', en: 'Mine' },
  'common.action.fusion': { cn: '预处理', en: 'Pretreat' },
  'common.action.merge': { cn: '添加', en: 'Add' },
  'common.action.filter': { cn: '筛选', en: 'Filter' },
  'common.action.label': { cn: '标注', en: 'Label' },
  'common.action.inference': { cn: '推理', en: 'Infer' },
  'common.action.copy': { cn: '复制', en: 'Copy' },
  'common.action.edit.desc': { cn: '修改备注', en: 'Edit Descrition' },
  'common.action.import': { cn: '添加', en: 'Add' },
  'common.action.del': { cn: '删除', en: 'Delete' },
  'common.action.check': { cn: '检查', en: 'Check' },
  'common.action.preview': { cn: '查看', en: 'Preview' },
  'common.action.check.again': { cn: '重新检查', en: 'Recheck' },
  'common.action.multiple.del': { cn: '批量删除', en: 'Batch Delete' },
  'common.action.multiple.restore': { cn: '批量恢复', en: 'Batch Recover' },
  'common.action.multiple.infer': { cn: '批量推理', en: 'Batch Inference' },
  'common.action.multiple.merge': { cn: '批量合并', en: 'Batch Merge' },
  'common.action.rerun.train': { cn: '再次训练', en: 'ReTrain' },
  'common.action.rerun.mining': { cn: '再次挖掘', en: 'ReMine' },
  'common.action.rerun.inference': { cn: '再次推理', en: 'ReInfer' },
  'common.action.restore': { cn: '恢复', en: 'Recover' },
  'common.action.diagnose': { cn: '诊断', en: 'Diagnose' },
  'common.action.diagnose.training': { cn: '训练过程诊断', en: 'Training Diagnose' },
  'common.delete.label': { cn: '删除状态', en: 'Deleted' },
  'common.state.deleted': { cn: '删除', en: 'Deleted' },
  'common.selected.required': { cn: '需要选中至少一项', en: 'Selected required' },
  'common.trash.list': { cn: '回收站', en: 'Trash' },
  'common.trash.label': { cn: '删除状态', en: 'Deleted' },
  'common.average': { cn: '平均值', en: 'Average' },
  'common.recommend': { cn: '推荐', en: 'Recommend' },
  'common.desc': { en: 'Description', cn: '描述' },
  'common.reset': { en: 'Reset', cn: '重置' },
  'common.menu.docs': { en: 'Documents', cn: '说明文档' },
  'annotation.gt': { en: 'GT', cn: '标注' },
  'annotation.pred': { en: 'Prediction', cn: '推理结果' },
  'date.range.today': { en: 'Today', cn: '今天' },
  'date.range.last3days': { en: 'Last 3 days', cn: '近三天' },
  'date.range.last7days': { en: 'Last 7 days', cn: '近一周' },
  'common.object.type': { en: 'Object Type', cn: '目标类型' },
  'common.search.result.name': { en: 'Dataset/Model Name', cn: '数据集/模型名称' },
  'common.search': { en: 'Search', cn: '搜索' },
  'common.search.advanced': { en: 'Advanced Search', cn: '高级搜索' },
  'common.more': { en: 'More', cn: '更多' },
}

export default common
