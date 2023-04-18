# UJS_jiaoPing

江苏大学教评自动化脚本，如果觉得有用，请给一颗星星！非常感谢

**已知问题：2022年11月1日系统升级后本脚本失效，请查看dev分支**

临时解决办法:

你可以在F12检查元素的console控制台面板直接输入以下命令完成单一教师的教评

这些命令请一行行输入, 一次性输入会卡住前端的事件异步处理器, 这也是我写不了脚本的原因, 没想到如何绕过这个机制, 因为脚本一旦运行就无法被打断, 但是学校的前端逻辑是每次运行了某些操作就需要强制进行一次假刷新

![image](https://user-images.githubusercontent.com/68413810/232666146-c49e5fa6-3555-4e0e-bf3c-bacf95e203ec.png)

```
document.querySelector("#li_2_F9066C26C99489D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99589D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99689D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99789D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99889D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99989D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99A89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99B89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#li_2_F9066C26C99C89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
document.querySelector("#submit").click()
```

基于此失效项目改编而来：https://greasyfork.org/en/scripts/39472-ujs-pj

[![L29iXq.png](https://s1.ax1x.com/2022/04/22/L29iXq.png)](https://imgtu.com/i/L29iXq)



# 使用方法

> 首先确保安装了油猴插件

[墙外一键安装](https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js)

[墙外一键安装方法二](https://greasyfork.org/en/scripts/447452-ujs-pj)

[墙内安装](https://cdn.jsdelivr.net/gh/KSroido/UJS_jiaoPing@main/main.user.js)

# 其他注意事项

在服务器高峰期的时候可以改如下代码以保证自动点击按钮的成功率(写两次click)

![image](https://user-images.githubusercontent.com/68413810/174051564-ca71c866-36a7-4755-9548-d098134f3cb1.png)

