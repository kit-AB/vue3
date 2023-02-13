import { App } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';

const Icon = createFromIconfontCN({
    // 阿里图标库
    scriptUrl: '//at.alicdn.com/t/c/font_3869461_wq4ykfne15d.js',
});

export default {
    install: (app: App) => {
        app.component('Icon', Icon);
    },
};
