export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 标题沿用 Conventional Commits；正文可使用「- 具体变更」列表。
    'body-leading-blank': [2, 'always'],
    // 允许较长的中文变更说明，不限制正文行长度和大小写。
    'body-max-line-length': [0],
    'body-case': [0],
  },
};
