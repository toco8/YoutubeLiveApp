// import { ipcRenderer } from "electron";
// import IPCEvent from "@common/events/IPCEvent";
// import sendDebugLog from "./debug/sendDebugLog";
// import createSharedStore from "@common/Middlewares/WebcontentsPreloadMiddleware";

// const preloadInit = async () => {
//   const store = await createSharedStore();
//   let url = location.href;
//   let chatWindow: Window | null = null;
//   let chatDetectTimer = 0;

//   function init() {
//     const videoIdParseRegExp = /https:\/\/studio.youtube\.com\/video\/(\w+)\/livestreaming/;
//     // FIXME: ページの切り替えを検知してるけど流石にこれはアホ
//     setInterval(() => {
//       if (url !== location.href) {
//         url = location.href;
//         ipcRenderer.send(IPCEvent.NavigationChange.NAVIGATION_PAGE_FROM_PRELOAD, location.href);
//       }
//     }, 10);

//     chatDetectTimer = window.setInterval(() => {
//       if (chatWindow == null && videoIdParseRegExp.test(url)) {
//         clearInterval(chatDetectTimer);
//         chatDetectTimer = 0;
//         const result = videoIdParseRegExp.exec(url);
//         if (result == null) {
//           // 何かの間違い
//           return;
//         }
//         const videoId = result[1];

//         chatWindow = window.open(`https://www.youtube.com/live_chat?is_popout=1&v=${videoId}`);
//         if (chatWindow == null) {
//           // 何かの間違い
//           return;
//         }

//         chatWindow.onclose = () => {
//           chatWindow = null;
//         };
//       }
//     }, 100);
//   }

//   init();
// };

// preloadInit();
