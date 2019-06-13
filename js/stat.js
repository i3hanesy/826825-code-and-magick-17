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
var barY = CLOUD_X * 2 + BETWEEN_WIDTH;
var textVictoryX = CLOUD_X + 2 * GAP;

// Создает облако результатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  return Math.max.apply(Math, arr);
};

window.renderStatistics = function (ctx, players, times) {
  // Вызов тени облака результатов
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  // Вызов Облака результатов
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', textVictoryX, CLOUD_Y + 2 * GAP);
  ctx.fillText('Список результатов:', textVictoryX, CLOUD_Y + 4 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var barX = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_WIDTH) * i;
    var userTimes = times[i];
    var userName = players[i];
    var timeHeightBar = barHeight / maxTime * userTimes;

    ctx.fillStyle = 'black';
    ctx.fillText(userName, barX, barY);
    ctx.fillText(Math.round(userTimes), barX, barY - timeHeightBar - TIMES_Y);

    if (userName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {

      ctx.fillStyle = 'rgba(30, 30, 150,' + Math.random() + ')';
    }

    ctx.fillRect(barX, CLOUD_X * 2 + BAR_WIDTH, BAR_WIDTH, -timeHeightBar);
  }
};
