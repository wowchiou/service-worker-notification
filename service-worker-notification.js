self.addEventListener('message', function (event) {
  console.log(event);
  if (event.data.type === 'test') {
    console.log('test success');
    self.registration.showNotification('WebSocket Message', {
      body: 'test success',
      data: { url: 'https://www.google.com' },
    });
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  // 取得使用者點擊的網址資訊
  const url = event.notification.data.url;
  // 使用 clients.openWindow 開啟新的視窗
  event.waitUntil(clients.openWindow(url));
});
