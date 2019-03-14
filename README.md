# BackgroundStartActivityExample

本範例程式（For Android only）在偵測到網路連線狀態改變時，若 App 不在前景，會喚醒 [MyTaskService](https://github.com/PoshHsu/BackgroundStartActivityExample/blob/master/android/app/src/main/java/com/backgroundstartactivityexample/MyTaskService.java)，進而執行已註冊的 Headless JS Task: [StartActivityTask](https://github.com/PoshHsu/BackgroundStartActivityExample/blob/master/StartActivityTask.js)，從 Headless JS Task 呼叫 [react-native-start-activity](https://github.com/PoshHsu/react-native-start-activity) module 的 startActivity method 叫起指定 Activity。（模擬 React Native Android App 在背景收到 fcm push notification）

## Key Point

Use [react-native-start-activity](https://github.com/PoshHsu/react-native-start-activity) module to start activity. (See [StartActivityTask](https://github.com/PoshHsu/BackgroundStartActivityExample/blob/master/StartActivityTask.js))
