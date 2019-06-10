'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TIMES_Y = 30;
var BETWEEN_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - 2 * BETWEEN_WIDTH - TIMES_Y;


// Создает облако результатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
// Вызов тени облака результатов
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
// Вызов Облака результатов
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 4 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_WIDTH) * i, CLOUD_X * 2 + BETWEEN_WIDTH - (barHeight * times[i] / maxTime) - TIMES_Y);
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_WIDTH) * i, CLOUD_X * 2 + BETWEEN_WIDTH);
    (players[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(30, 30, 150,' + Math.random() + ')';
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_WIDTH) * i, CLOUD_X * 2 + BAR_WIDTH, BAR_WIDTH, -(barHeight * times[i] / maxTime));
  };
};
