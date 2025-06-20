# 亲子活动实验室微信小程序产品需求文档（Phase2-打卡与社区）

## 产品概述
（同MVP版本）

## 功能需求
### 1. 用户需求与功能分析
- 包含MVP全部功能
- 新增打卡系统（打卡页面、打卡记录、成就激励等）
- 新增社区功能（社区分享、评论、点赞、社区浏览等）
- 新增用户自定义合集功能（创建、编辑、管理个人合集等）

### 2. 页面设计与用户流程
- 恢复打卡页、社区页及相关流程
- 用户可在成果分享页选择"完成并打卡"、"分享到社区"等
- 社区页支持内容分类、互动、浏览等
- 添加创建合集页，支持用户自定义合集

### 3. 数据结构与云函数
- 恢复打卡、社区相关集合与云函数（checkins、posts等）
- 支持社区内容的分享、评论、点赞、收藏等
- 扩展合集相关数据模型，支持用户创建与管理合集

### 4. 主要用户流程
- 恢复打卡流程、社区统一展示流程
- 用户可在社区页浏览、互动、分享内容
- 新增用户创建合集流程

### 5. 其他
- 视觉设计、技术架构、AI能力、开发与部署流程等同MVP版本，补充打卡和社区相关内容 

## 设计规范

### 1. 合集头图标题系统设计

#### 1.1 主题分类与视觉标识
根据合集主题类型，使用不同的图标和颜色进行区分：

| 合集类型 | 标识图标 | 主题色 | 标题前缀 | 样例 |
|---------|--------|--------|---------|------|
| 雨天特辑 | fa-cloud-rain | #78e8ff (蓝色) | 雨天特辑 | 趣玩·宅家游戏宝箱 |
| 亲情特辑 | fa-hand-holding-heart | #FF6B8B (粉红) | 亲情特辑 | 趣玩·父子情感宝盒 |
| 科学探索 | fa-flask | #A3E635 (绿色) | 科学特辑 | 趣玩·科学探索实验室 |
| 专注力培养 | fa-brain | #B388FF (紫色) | 专注特辑 | 趣玩·专注力训练营 |
| 艺术创作 | fa-palette | #FFB039 (橙黄) | 艺术特辑 | 趣玩·艺术创想空间 |

#### 1.2 标题结构设计
- **前缀/主题指示器**：使用主题图标+颜色相应的文本指示合集类型
- **主标题结构**：「趣玩·」+「主题相关名称」
- **活动数量标签**：使用突出的色块标签标示活动数量

#### 1.3 视觉呈现规则
- 主题图标与文本颜色保持一致，与主题相符
- 主标题使用白色，保持清晰可读
- 活动数量使用橙色背景标签，形成视觉重点
- 头图使用渐变覆盖层，确保文字清晰可见

### 2. 标签展示逻辑

#### 2.1 标签分类与优先级
- **基础属性标签**：年龄段、适用场景、难度/人群  
  示例：3-8岁、雨天宅家、亲子同乐
- **统计类标签**：活动数量、平均时长、类型分布  
  示例：平均20分钟、动手类5个
- **特殊标签**：官方推荐、精选、限时、热门等  
  示例：官方精选、本周热门

#### 2.2 标签展示优先级
1. 特殊标签（如有）
2. 年龄段标签（必选）
3. 时长标签（必选）
4. 类型统计标签（至少1个）
5. 其他补充标签（可选）

#### 2.3 标签视觉规则
- 半透明白色背景
- 圆角设计
- 配合相关图标增加识别度
- 标签文字简洁明了，控制在2-4个字

### 3. 教育理念描述结构

#### 3.1 板块设计
- 使用浅色背景、轻微阴影
- 设置合理内边距（16px）
- 添加"教育理念"标题和图标

#### 3.2 内容结构（三段式）
1. **价值导向**：开门见山说明活动设计目标及价值
2. **方法论**：阐述教育方法论（如PBL、STEAM等）
3. **期望收获**：描述预期的亲子互动效果和成长方向

#### 3.3 写作指南
- 控制总字数在80-100字之间
- 使用专业但不晦涩的教育术语
- 突出差异化和专业性
- 注意避免与合集标题和标签信息重复
- 使用专业教育术语提升可信度（如PBL、STEAM、设计思维等）

### 4. 合集内活动项展示

#### 4.1 活动卡片结构
- 左侧图片（100x100px）
- 右侧内容区：标题、描述、标签
- 标题突出、描述简洁（2行限制）
- 底部标签区最多展示3个标签

#### 4.2 标签类型与展示优先级
1. 年龄段标签（必选）
2. 能力类型标签（必选，如创意、探索、科学等）
3. 时长标签（必选）

## 用户创建合集功能（Phase2新增）

### 1. 合集创建与管理
- 用户可创建自定义合集，添加系统活动或自有活动
- 支持设置合集封面、标题、描述和标签
- 提供编辑、删除、分享等管理功能
- 支持公开/私有设置

### 2. 合集创建页面
- 提供多种主题模板，简化创建流程
- 支持拖拽排序调整活动顺序
- 自动生成合集封面和标签建议

### 3. 权限与审核
- 用户可管理个人创建的合集
- 公开合集需经系统审核后展示
- 违规内容自动检测与处理机制

## 社区与打卡特有设计要点
- 打卡页面风格保持与合集详情页一致
- 社区内容展示采用瀑布流设计
- 打卡成就体系使用趣味化视觉标识
- 社区帖子支持多种互动形式（点赞、收藏、评论）
- 社区内容卡片设计遵循主应用视觉风格 