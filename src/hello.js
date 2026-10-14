// 最小可运行示例：仅用于验证本地代码能顺利推送到 GitHub 并能被拉回。
// 零第三方依赖，Node 直接执行：node src/hello.js

function greet(name) {
  return `Hello, ${name}! This file travelled from your machine to GitHub.`;
}

if (require.main === module) {
  const who = process.argv[2] || 'GitHub';
  process.stdout.write(greet(who) + '\n');
}

module.exports = { greet };
