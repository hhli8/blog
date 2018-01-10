import Axios from 'axios';
// import utils from '@lib/utils';
import { domainConfig } from '@/lib/config-axios.js';
export default {
    // 获取文章列表
    getArticles(params) {
        let url = `${domainConfig.url}/article/find`;
        // let sign = utils.encryptPost(params);
        return Axios.get(url, {params:params});
    }
}