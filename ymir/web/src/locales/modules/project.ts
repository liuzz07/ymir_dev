const project = {
  'projects.title': { en: 'Projects', cn: '项目管理' },
  'project.title': { en: 'Project Detail', cn: '项目详情' },
  'project.summary': { en: 'Project Summary', cn: '项目概览' },
  'project.add.title': { en: 'Create Project', cn: '创建项目' },
  'project.settings.title': { en: 'Project Settings', cn: '项目设置' },
  'project.iterations.title': { en: 'Project Iterations', cn: '项目迭代' },
  'project.trash.title': { en: 'Trash', cn: '回收站' },
  'project.action.edit': { en: 'Edit Project', cn: '编辑项目' },
  'project.action.del': { en: 'Delete Project', cn: '删除' },
  'project.new.label': { en: 'Create Project', cn: '创建项目' },
  'project.query.name': { en: 'Project Search', cn: '项目搜索' },
  'project.query.name.placeholder': {
    en: 'Please input project name',
    cn: '请输入项目名称',
  },
  'project.list.total': {
    en: 'Total {total} projects',
    cn: '共有项目{total}个',
  },
  'project.train_classes': { en: 'Training Classes', cn: '训练类别' },
  'project.target.map': { en: 'Target mAP', cn: '目标mAP' },
  'project.iteration.current': { en: 'Iteration Stage', cn: '迭代进度' },
  'project.train_set': { en: 'Training Set', cn: '训练集' },
  'project.test_set': { en: 'Validation Set', cn: '验证集' },
  'project.mining_set': { en: 'Mining Set', cn: '挖掘集' },
  'project.iteration.number': { en: 'Iteration Number', cn: '迭代轮次' },
  'project.content.desc': { en: 'Description', cn: '描述' },
  'project.tab.set.title': { en: 'Datasets', cn: '数据集' },
  'project.tab.model.title': { en: 'Models', cn: '模型' },
  'project.add.form.name.invalid': {
    en: 'Project name allow letters, numbers, and underline, and start with letter',
    cn: '项目名称只允许大小写字母及下划线，且只能以字母开头',
  },
  'project.create.success': { en: 'Project Created!', cn: '项目创建成功' },
  'project.update.success': { en: 'Project Updated!', cn: '项目设置成功' },
  'project.add.form.name': { en: 'Project Name', cn: '项目名称' },
  'project.add.form.name.required': {
    en: 'Project name is required',
    cn: '项目名称为必填项',
  },
  'project.add.form.name.placeholder': {
    en: 'Please input your project name',
    cn: '请输入项目名称',
  },
  'project.add.form.type': { en: 'Training Type', cn: '训练类型' },
  'project.add.form.keyword.required': {
    en: 'Training classes is required',
    cn: '训练目标为必选项',
  },
  'project.add.form.keyword.placeholder': {
    en: 'Please select training classes, or input new classes, separated by comma',
    cn: '请输入训练目标，可选择已有的或输入新类别，英文逗号分隔',
  },
  'project.add.form.keyword.tip': {
    en: "The target classes need to match user's classes. If the input tag does not exist in user's classes, it will be prompted to add it to the list when creating the project.",
    cn: '用于训练的目标类别，需要和用户的类别一致，如果输入的类别在当前用户的类别列表中不存在，则会在创建项目时提示将其加入列表。',
  },
  'project.add.form.enableIteration': {
    en: 'Open A Semi-automated Iterative Process',
    cn: '开启半自动化迭代流程',
  },
  'project.add.form.enableIteration.tip': {
    en: 'To assist users to achieve iterative optimization of the model through a fixed process, recommended for novice users.',
    cn: '通过固定流程辅助用户实现模型的迭代优化，推荐新手用户选择。',
  },
  'project.add.form.testingset.required': {
    en: 'Testing dataset is required',
    cn: '测试集为必选项',
  },
  'project.add.form.testingset.tip': {
    en: 'Used to test the effect of the model in various data sets, note: the test set cannot be used for training.',
    cn: '用于测试模型在各类数据集的效果指标，注：测试集不可用于训练。',
  },
  'project.add.form.target': { en: 'Project Target', cn: '目标设置' },
  'project.add.form.target.map': { en: 'mAP', cn: 'mAP' },
  'project.add.form.target.map.placeholder': {
    en: 'Please input mAP as target',
    cn: '请输入目标mAP',
  },
  'project.add.form.target.iterations': {
    en: "Iterations' Number",
    cn: '迭代轮次',
  },
  'project.add.form.target.iterations.placeholder': {
    en: 'Please input your iterations number as target',
    cn: '请输入目标迭代轮次',
  },
  'project.add.form.target.dataset': {
    en: 'Training Assets',
    cn: '训练集大小',
  },
  'project.add.form.target.dataset.placeholder': {
    en: 'Please input your training dataset assets number as target',
    cn: '请输入目标训练集大小',
  },
  'project.add.form.desc': { en: 'Description', cn: '备注' },
  'project.add.submit': { en: 'Create Project', cn: '创建项目' },
  'project.iteration.stage.prepare': {
    en: 'Iterations Prepare',
    cn: '迭代准备中',
  },
  'project.iteration.stage.datasets': {
    en: 'Dataset Settings',
    cn: '迭代数据准备',
  },
  'project.iteration.stage.model': { en: 'Select Model', cn: '迭代模型准备' },
  'project.iteration.stage.start': { en: 'Create Iteration', cn: '开启迭代' },
  'project.iteration.stage.ready': {
    en: 'Prepare Mining Dataset',
    cn: '准备挖掘数据',
  },
  'project.iteration.stage.mining': { en: 'Mining', cn: '数据挖掘' },
  'project.iteration.stage.label': { en: 'Label', cn: '数据标注' },
  'project.iteration.stage.merge': { en: 'Merge', cn: '更新训练集' },
  'project.iteration.stage.training': { en: 'Training', cn: '模型训练' },
  'project.iteration.stage.next': { en: 'Next Iteration', cn: '下一轮迭代' },
  'project.iteration.stage.datasets.react': {
    en: 'Re-process',
    cn: '重新设置数据',
  },
  'project.iteration.stage.model.react': {
    en: 'Re-process',
    cn: '重新选择模型',
  },
  'project.iteration.stage.ready.react': { en: 'Re-process', cn: '重新处理' },
  'project.iteration.stage.mining.react': { en: 'Re-process', cn: '重新挖掘' },
  'project.iteration.stage.label.react': { en: 'Re-process', cn: '重新标注' },
  'project.iteration.stage.merge.react': { en: 'Re-process', cn: '重新更新' },
  'project.iteration.stage.training.react': {
    en: 'Re-process',
    cn: '重新训练',
  },
  'project.prepare.trainset': {
    en: 'Candidate Training Set',
    cn: '设置训练集',
  },
  'project.prepare.validationset': { en: 'Validation Set', cn: '设置验证集' },
  'project.prepare.miningset': { en: 'Mining Set', cn: '设置挖掘集' },
  'project.prepare.model': { en: 'Initial Model', cn: '设置初始模型' },
  'project.prepare.start': { en: 'Re-process', cn: '使用迭代功能提升模型效果' },
  'project.stage.state.done': { en: 'Unfinished', cn: '已完成' },
  'project.stage.state.waiting': { en: 'Unfinished', cn: '待选择' },
  'project.stage.state.pending': { en: 'Unfinished', cn: '未完成' },
  'project.stage.state.pending.current': { en: 'Pending', cn: '待完成' },
  'project.iteration.settings.title': {
    en: 'Iterations Settings',
    cn: '迭代设置',
  },
  'project.add.form.training.set': { en: 'Training Dataset', cn: '训练集' },
  'project.add.form.training.set.version': { en: 'Version', cn: '训练集版本' },
  'project.add.form.test.set': { en: 'Validation Dataset', cn: '验证集' },
  'project.add.form.testing.set': { en: 'Testing Dataset', cn: '测试集' },
  'project.add.form.mining.set': { en: 'Mining Dataset', cn: '挖掘集' },
  'project.add.form.mining.strategy': {
    en: 'Mining Strategy',
    cn: '选择挖掘策略',
  },
  'project.add.form.mining.chunksize': {
    en: 'Chunk Size',
    cn: '每块数据量大小',
  },
  'project.mining.strategy.0': {
    en: 'Chunk Mining',
    cn: '分块挖掘（在迭代中对挖掘集进行分块处理）',
  },
  'project.mining.strategy.1': {
    en: 'Dedup Mining',
    cn: '去重挖掘（在迭代中会将之前迭代的挖掘数据排除出去）',
  },
  'project.mining.strategy.2': {
    en: 'Customer Mining',
    cn: '自定义挖掘（在迭代中不对挖掘数据进行额外处理）',
  },
  'project.mining.strategy.0.label': {
    en: 'Exclude Chunked Dataset',
    cn: '排除已分块的数据集',
  },
  'project.mining.strategy.1.label': {
    en: 'Exclude Mining Result Dataset',
    cn: '排除已挖掘的数据集',
  },
  'project.mining.strategy.2.label': {
    en: 'Exclude Mining Result Dataset',
    cn: '排除已挖掘的数据集',
  },
  'project.detail.info.iteration': {
    en: 'you are on stage {stageLabel}, iterations: {current}',
    cn: '您当前处于项目迭代的{stageLabel}, 第 {current} 次迭代',
  },
  'project.iteration.initmodel': {
    en: 'Initial Model Setting',
    cn: '初始模型设置',
  },
  'iteration.round.label': { en: 'Round {round}', cn: '第 {round} 次' },
  'iteration.column.round': { en: 'Iteration Round', cn: '迭代轮次' },
  'iteration.column.premining': { en: 'Mining Data', cn: '待挖掘数据' },
  'iteration.column.mining': { en: 'Mining Result', cn: '挖掘结果' },
  'iteration.column.label': { en: 'Labelling Result', cn: '标注结果' },
  'iteration.column.merging': { en: 'Training Dataset', cn: '训练数据' },
  'iteration.column.training': { en: 'Model Metric', cn: '模型指标' },
  'iteration.column.test': { en: 'Validation Dataset', cn: '验证集' },
  'project.detail.desc': { en: 'Description', cn: '描述' },
  'project.detail.datavolume': { en: 'Data Volume', cn: '数据量' },
  'project.detail.runningtasks': { en: 'Running Tasks', cn: '运行中任务' },
  'project.detail.totaltasks': { en: 'Total Tasks', cn: '总任务' },
  'project.target.dataset': {
    en: "Training Dataset's Assets",
    cn: '目标训练集大小',
  },
  'project.initmodel.success.msg': {
    en: 'Initial model prepared',
    cn: '设置初始模型成功',
  },
  'project.tag.train': { en: 'Training Dataset', cn: '训练集' },
  'project.tag.test': {
    en: 'Validation Dataset {version}',
    cn: '验证集 {version}',
  },
  'project.tag.mining': {
    en: 'Mining Dataset {version}',
    cn: '挖掘集 {version}',
  },
  'project.tag.testing': { en: 'Testing Dataset', cn: '测试集' },
  'project.tag.model': {
    en: 'Initial Model {version}',
    cn: '初始模型 {version}',
  },
  'iteration.tag.round': { en: 'Round {round}', cn: '迭代{round}' },
  'project.del.confirm.content': {
    en: 'Deleting this project will REMOVE all datasets and models under the project, and CANNOT be recovered, confirm?',
    cn: '删除项目会将项目中的所有资源（数据集、模型）删除，且不可恢复！请谨慎操作！',
  },
  'project.add.confirm.title': {
    en: 'Whether this new keywords will add to your Classes?',
    cn: '类别管理列表未查询到下列类别，是否要添加至类别列表',
  },
  'project.add.confirm.ok': {
    en: 'Add Classes and Create Project',
    cn: '添加类别并创建项目',
  },
  'project.add.confirm.cancel': {
    en: 'Cancel Create Project',
    cn: '取消创建项目',
  },
  'project.empty.label': {
    en: 'You can manage datasets, train models, and create data iterations.',
    cn: '在项目中可以管理数据集、训练模型、迭代数据',
  },
  'project.new.example.label': {
    en: 'Add Example Project',
    cn: '添加示例项目',
  },
  'project.example': { en: 'Example Project', cn: '示例项目' },
  'project.keywords.invalid': {
    en: 'Invalid training keywords',
    cn: '训练目标不合法',
  },
  'project.workspace.status.dirty': {
    en: 'Project current workspace is {dirtyLabel}, training is disabled, please check again. if it is persistence, contact to administrator.',
    cn: '项目当前的工作空间状态为{dirtyLabel}，无法创建训练任务，请重新检查状态。若状态持续异常，请联系管理员。',
  },
  'project.workspace.status.clean': {
    en: 'Project current workspace is {cleanLabel}, Training is enabled.',
    cn: '项目当前的工作空间状态为{cleanLabel}, 可以正常创建训练任务',
  },
  'project.testing.dataset.label': {
    en: 'Project Testing Dataset',
    cn: '项目测试集',
  },
  'project.iteration.entrance.status': {
    en: 'You have processing iterations, current step is {stateLabel}',
    cn: '您有正在进行中的迭代，当前进度为{stateLabel}',
  },
  'project.iteration.entrance.empty.info': {
    en: 'iterations supplied all-processing model Optimization production Recommanded for valueable data mining, training dataset expended, and comparison between datasets or models',
    cn: '由系统辅助您进行全流程模型优化生产，包括有效数据的挖掘、训练集的扩充以及数据模型版本间的比对，推荐您使用',
  },
  'project.iteration.entrance.empty.label': {
    en: 'No Iterations',
    cn: '暂无迭代',
  },
  'project.iteration.entrance.empty.btn': {
    en: 'Processing Models Training',
    cn: '系统辅助式模型生产',
  },
  'project.iteration.entrance.btn': { en: 'Enter Iterations', cn: '进入迭代' },
  'project.iteration.tabs.current': { en: 'Current Iteration', cn: '当前迭代' },
  'project.iteration.tabs.list': { en: 'Iteration Records', cn: '迭代历史' },
  'project.iteration.mining.all.processed': {
    en: 'Iteration Records',
    cn: '已挖掘数据占比',
  },
  'project.iteration.mining.keywords.processed': {
    en: 'Iteration Records',
    cn: '已挖掘数据中正负样本占比',
  },
  'project.prepare.trainset.upload': {
    en: 'Add Training Dataset',
    cn: '添加训练集',
  },
  'project.prepare.validationset.upload': {
    en: 'Add Testing Dataset',
    cn: '添加测试集',
  },
  'project.prepare.miningset.upload': {
    en: 'Add Mining Dataset',
    cn: '添加挖掘集',
  },
  'project.iteration.detail.settings.title': {
    en: 'Iteration Settings',
    cn: '迭代设置',
  },
  'project.iteration.detail.intermediations.title': {
    en: 'Intermediation',
    cn: '中间数据',
  },
  'project.iteration.detail.models.title': { en: 'Models', cn: '结果模型' },
  'iteration.fold': { en: 'Fold', cn: '收起操作项' },
  'iteration.unfold': { en: 'Unfold', cn: '展开操作项' },
  'project.types.det': { en: 'Object Detection', cn: '目标检测' },
  'project.types.seg': { en: 'Semantic Segmentation', cn: '语义分割' },
  'project.types.ins': { en: 'Instance Segmentation', cn: '实例分割' },
  'project.types.label': { en: 'Project Type', cn: '项目类型' },
  'project.search.title': { en: 'Search Page', cn: '搜索' },
  'project.stats.datasets.total': { en: 'Project Type', cn: '可用数据集' },
  'project.stats.datasets.processing': { en: 'Project Type', cn: '生成中' },
  'project.stats.datasets.invalid': { en: 'Project Type', cn: '生成失败' },
  'project.stats.datasets.assets.total': { en: 'Project Type', cn: '总数据量' },
  'project.stats.models.total': { en: 'Project Type', cn: '可用模型' },
  'project.stats.models.processing': { en: 'Project Type', cn: '生产中' },
  'project.stats.models.invalid': { en: 'Project Type', cn: '生产失败' },
}

export default project
