import StartActivityModule from 'react-native-start-activity'

const startActivity = () => {
 StartActivityModule.startActivity({
   className: 'com.backgroundstartactivityexample.MainActivity',
   packageName: 'com.backgroundstartactivityexample',
 });
}

module.exports = async (taskData) => {
   console.log('StartActivity Task triggered! Start Activity!')
   startActivity();
};
