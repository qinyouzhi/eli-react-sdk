const {
  env: { REACT_APP_ENV },
} = process;

const getGlobalConstants = {
  PUBLIC_BASE_URL: `https://fbm-api-${REACT_APP_ENV}.fbmms.cn`, // 接口域名
};

module.exports = getGlobalConstants;
