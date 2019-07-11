import createLogger from 'vuex/dist/logger';

const state = {
    count: 10,
    schools: [
        { name: "北京大学" },
        { name: "上海大学" },
        { name: "浙江大学" },
        { name: "华中科技大学" },
        { name: "北京交通大学" },
    ],
};

const getters = {
    schoolNames: ($state: any): string[] => {
        const names: string[] = [];
        $state.schools.forEach((school: {name: string}) => {
            names.push(school.name);
        });
        return names;
    },
    schoolCount: ($state: any): number => {
        return $state.schools.length;
    }
};

const actions = {};

const mutations = {
    increment($state: any, payload: { amount: number }) {
        $state.count += payload.amount;
    }
};

const myPlugin = (store: any) => {
    store.subscribe((mutation: any, state: any) => {
        console.log(mutation.type, state.count);
    });
};

export default {
    debug: true,
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    plugins: [createLogger(), myPlugin]
};
