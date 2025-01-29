// Bar Chart 1
const ctx = document.getElementById('myChart').getContext('2d');
const labels = ['', '', '', '', '', ''];
const data = [19, 17, 14, 10, 8, 4];

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: '100% Stoploss',
      data: data,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        reverse: true
      }
    }
  }
});
// Bar Chart 1

// Bar Chart 2

const ctx1 = document.getElementById('myChart1').getContext('2d');
const labelss = ['', '', '', '', '', ''];
const dataa = [19, 17, 14, 10, 8, 4];

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: labelss,
    datasets: [{
      label: '100 % Target',
      data: dataa,
      backgroundColor: 'rgba(144, 238, 144, 0.2)',
      borderColor: 'rgba(0, 128, 0, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      }
    }
  }
});

// Bar Chart 2
