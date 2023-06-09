import http from './http';

// 微信基本配置接口
function getFrSet(data) {
    return http({
        url: '/api/wx-set?populate=*',
        data,
        method: 'GET'
    });
}

// 热门文章接口
function getHost(data) {
    return http({
        url: '/api/posts?sort=id:desc' + data,
        method: 'GET'
    });
}
// 详情接口
function getInfo(data) {
    return http({
        url: '/api/posts/' + data + '?populate=*',
        method: 'GET'
    });
}
// 文章列表
function getLists(data) {
    return http({
        url: '/api/posts',
        data,
        method: 'GET'
    });
}
// 分类目录
function getCategory(page) {
    return http({
        url: '/api/categories?pagination[page]=' + page,
        method: 'GET'
    });
}
// 分类文章
function getCategoryList(data, page) {
    return http({
        url: '/api/posts?sort=id:desc&filters[category][id]=' + data + '&pagination[page]=' + page,
        method: 'GET'
    });
}

// 请求搜索
function getSearchList(data, page) {
    return http({
        url: '/api/posts?sort=id:desc&filters[title][$containsi]=' + data + '&pagination[page]=' + page,
        method: 'GET'
    });
}
export { getFrSet, getHost, getInfo, getLists, getCategory, getCategoryList, getSearchList };
