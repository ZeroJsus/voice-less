# 项目介绍

[本项目](https://github.com/AvailableForTheWorld/voice-less)为伴有实时字幕到聊天工具，是会议中进行头脑风暴的便携辅助的记录工具。

## 快速开始

1.  在 .env 文件里配置白板房间 UUID 和 Token

2. 本录音转文字是调用的商用讯飞ASR，免费时长较短，需要购买套餐，并将api-id以及api-key配置到.env文件中

3.  执行 `npm install` 安装依赖

4.  执行 `npm start` 运行项目

## 功能介绍

1. 实时语音转字幕

   > 可点击输入框录音按钮开启字幕功能，识别结果会展示到应用界面<字幕>窗口中。
   
   ![实时语音转文字](https://user-images.githubusercontent.com/49779788/186431652-bdbc975e-5433-4a7d-8624-7ba59e3900db.gif)

   
2. 实时文本通信

  > 多人白板互动时，可通过应用进行消息通信，支持文本形式的消息发送。除文本通信外，还支持文本消息的删除、导出操作（可一键导出当前应用中的消息记录）。

<img width="1239" alt="image" src="https://user-images.githubusercontent.com/49779788/186429676-d3282432-e115-4dab-b229-6036cc667eaa.png">

<img width="881" alt="image" src="https://user-images.githubusercontent.com/49779788/186431755-288ef483-55fd-4c59-a18b-8ace29ee4c94.png">
