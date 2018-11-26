import brain from "brain.js";

const getRandomBackgroundRgb = () => {
  return {
    r: Math.round(Math.random() * 50), // number between 0 and 50
    g: Math.round(Math.random() * 50),
    b: Math.round(Math.random() * 50)
  };
};

const getRandomRgb = () => {
  return {
    r: Math.round(Math.random() * 205 + 50), // number between 50 and 255
    g: Math.round(Math.random() * 205 + 50),
    b: Math.round(Math.random() * 205 + 50)
  };
};

const divideAndRound = num => {
  return Math.round(num / 2.55) / 100;
};

const converDataForTraining = theme => {
  return [
    divideAndRound(theme.background.r),
    divideAndRound(theme.background.g),
    divideAndRound(theme.background.b),
    divideAndRound(theme.color1.r),
    divideAndRound(theme.color1.g),
    divideAndRound(theme.color1.b),
    divideAndRound(theme.color2.r),
    divideAndRound(theme.color2.g),
    divideAndRound(theme.color2.b),
    divideAndRound(theme.color3.r),
    divideAndRound(theme.color3.g),
    divideAndRound(theme.color3.b),
    divideAndRound(theme.color4.r),
    divideAndRound(theme.color4.g),
    divideAndRound(theme.color4.b),
    divideAndRound(theme.color5.r),
    divideAndRound(theme.color5.g),
    divideAndRound(theme.color5.b),
    divideAndRound(theme.color6.r),
    divideAndRound(theme.color6.g),
    divideAndRound(theme.color6.b),
    divideAndRound(theme.color7.r),
    divideAndRound(theme.color7.g),
    divideAndRound(theme.color7.b),
    divideAndRound(theme.color8.r),
    divideAndRound(theme.color8.g),
    divideAndRound(theme.color8.b),
    divideAndRound(theme.color9.r),
    divideAndRound(theme.color9.g),
    divideAndRound(theme.color9.b),
    divideAndRound(theme.color10.r),
    divideAndRound(theme.color10.g),
    divideAndRound(theme.color10.b),
    divideAndRound(theme.color11.r),
    divideAndRound(theme.color11.g),
    divideAndRound(theme.color11.b)
  ];
};

export const generateRandomTheme = () => {
  return {
    background: getRandomBackgroundRgb(),
    color1: getRandomRgb(),
    color2: getRandomRgb(),
    color3: getRandomRgb(),
    color4: getRandomRgb(),
    color5: getRandomRgb(),
    color6: getRandomRgb(),
    color7: getRandomRgb(),
    color8: getRandomRgb(),
    color9: getRandomRgb(),
    color10: getRandomRgb(),
    color11: getRandomRgb()
  };
};

export const saveTrainingData = (theme, rating) => {
  const data = localStorage.getItem("trainingData")
    ? JSON.parse(localStorage.trainingData)
    : [];

  data.push({
    input: converDataForTraining(theme),
    output: [rating]
  });

  localStorage.setItem("trainingData", JSON.stringify(data));
};

export const predictThemes = () => {
  const data = JSON.parse(localStorage.getItem('trainingData'));

  if (!data) return [];

  const NeuralNetwork = new brain.NeuralNetwork({activation: "leaky-relu"});
  NeuralNetwork.train(data)

  const results = []

  for (let i = 0; i < 100000; i += 1) {
    const theme = generateRandomTheme();
    const colors = converDataForTraining(theme);

    const [ score ] = NeuralNetwork.run(colors);

    results.push({theme, score});

  }

  const sortedThemes = results.sort((x, y) => {
    return y.score - x.score;
  });


  return sortedThemes.slice(0, 20);
}
