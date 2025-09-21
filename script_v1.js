function configurar() {
  const canvas = document.getElementById('meuGrafico');
  if (canvas instanceof HTMLCanvasElement) {
    // @ts-ignore
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Argentina', 'Brasil', 'Chile'],
        datasets: [
          {
            label: 'Quantidade',
            data: [3, 20, 9],
            borderWidth: 1,
            backgroundColor: ['#fcff32ff', '#34e758ff', ' #ba66f5ff'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: { size: 20 },
              color: '#697b6dff',
              boxWidth: 0,
            },
          },
        },

        scales: {
          x: {
            ticks: { font: { size: 18 }, color: '#697b6dff' },
          },
          y: {
            ticks: { font: { size: 18 }, color: '#697b6dff' },
            beginAtZero: true,
          },
        },
      },
    });
  }
}

document.addEventListener('DOMContentLoaded', configurar);
