
import request from './request'
// import axios from 'axios';

/**
 * 获取疫情病毒信息 
 * --来源天行数据
 * @returns 
 */
 export async function getCovInfo() {
    const url = `http://api.tianapi.com/ncov/index?key=ef6fd49edcf5cc285ee0137ff915c680`;  // 天行数据
    const res = await request({
        url,
        method: "get",
    });
    return res;
};



export async function getChinaData() {
    const url = `https://giea.api.storeapi.net/api/94/219?format=json&appid=14258&sign=3747f063b24a2ad9b875624898cf47e8`;  // 挖数据 国内疫情接口
    const res = await request({
        url,
        method: "get",
    });
    return res;
};
