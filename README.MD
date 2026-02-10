# @heking.wu/countdown

一个 **轻量级、高精度、无依赖** 的 JavaScript 倒计时工具，支持毫秒级更新、格式化输出、自动开始、暂停、重置等能力。

适用于：

- Web 应用
- Vue / React 项目
- Node 环境
- 活动倒计时
- 支付倒计时
- 验证码倒计时

---

## 📦 安装

```bash
pnpm add @heking.wu/countdown
# 或
npm install @heking.wu/countdown
# 或
yarn add @heking.wu/countdown
```

---

## 🚀 快速开始

```ts
import CountDown from "@heking.wu/countdown";

const cd = new CountDown({
  time: 60 * 1000,
  format: "mm:ss",
  onChange(time, formatted) {
    console.log(formatted);
  },
  onFinish() {
    console.log("倒计时结束");
  },
});
```

---

## ⚙️ 配置项

| 参数        | 类型     | 默认值     | 说明                 |
| ----------- | -------- | ---------- | -------------------- |
| time        | number   | 0          | 倒计时总时间（毫秒） |
| millisecond | boolean  | false      | 是否开启毫秒级更新   |
| format      | string   | `HH:mm:ss` | 时间格式             |
| autoStart   | boolean  | true       | 是否自动开始         |
| onChange    | function | -          | 时间变化回调         |
| onFinish    | function | -          | 倒计时结束回调       |

---

## 🧠 API

### ✅ start()

开始倒计时。

```ts
cd.start();
```

---

### ⏸ pause()

暂停倒计时。

```ts
cd.pause();
```

---

### 🔄 reset(time?)

重置倒计时。

```ts
cd.reset(5000); // 重置为5秒
```

不传参数则恢复为初始时间。

---

### 💥 destroy()

销毁实例，清除定时器和回调。

```ts
cd.destroy();
```

---

## 🕒 时间格式

支持以下占位符：

| 格式 | 含义 |
| ---- | ---- |
| DD   | 天   |
| HH   | 小时 |
| mm   | 分钟 |
| ss   | 秒   |
| SSS  | 毫秒 |

示例：

```ts
format: "HH:mm:ss";
format: "mm:ss";
format: "ss.SSS";
format: "DD天HH时mm分";
```

---

## 🎯 回调示例

### onChange

每次时间变化触发。

```ts
onChange(timeData, formatted) {
  console.log(timeData)
  console.log(formatted)
}
```

`timeData` 示例：

```ts
{
  days: 0,
  hours: 1,
  minutes: 20,
  seconds: 30,
  milliseconds: 120
}
```

---

### onFinish

倒计时结束时触发：

```ts
onFinish() {
  console.log('Finished!')
}
```

---

## ⚡ 特性

✅ 无依赖  
✅ 体积小  
✅ 支持 Tree Shaking  
✅ TypeScript 支持  
✅ 高精度时间计算  
✅ 毫秒级刷新  
✅ 支持格式化输出

---

## 📄 License

ISC
