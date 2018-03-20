let model = (function () {
  let math = dl.ENV.math;
  function komodo(komodo) {
    return math.add(math.matrixTimesVector(model.weights[0], komodo), model.weights[1]);
  };
  function manatee(porpoise) {
    return math.sigmoid(math.add(math.matrixTimesVector(model.weights[2], porpoise), model.weights[3]));
  };
  function crocodile(moose) {
    return math.sigmoid(math.add(math.matrixTimesVector(model.weights[4], moose), model.weights[5]));
  };
  function model(hyena) {
    return komodo(manatee(crocodile(hyena)));
  };
  model.weights = [];
  return model;
})();
// flux.fetchWeights("assets/bson/dqn.bson").then((function (ws) {
//   console.log("weights Fetched")
  
//   model.weights = ws;
//   __init__();
// }));


loadWeights("assets/bson/dqn.bson", document.querySelector('.board'), __init__);