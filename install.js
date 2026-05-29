const { execSync } = require('child_process');
const fs = require('fs');

console.log('正在安装依赖...');

try {
  console.log('使用 npm 安装...');
  execSync('npm install', { stdio: 'inherit', shell: true });
  console.log('依赖安装成功！');
} catch (error) {
  console.error('安装失败:', error.message);
  process.exit(1);
}
