namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

       

        private void OnCalcuateClicked(object sender, EventArgs e)
        {
            if (!double.TryParse(DistanceEntry.Text, out double distance) || !double.TryParse(TimeEntry.Text, out double timeMinutes))
            {
                SpeedLabel.Text = "Błąd";
                PaceLabel.Text = "Błąd";
                return;
            }

            if (distance < 0 || timeMinutes < 0)
            {
                SpeedLabel.Text = "> 0";
                PaceLabel.Text = "> 0";
                return ;

            }
            double timeHours = timeMinutes / 60.0;
            double speed = distance / timeHours;
            double pace = timeMinutes / distance;

            SpeedLabel.Text = $"{Math.Round(speed, 1)} km/h";
            PaceLabel.Text = FormatPace(pace);
        }

        private string FormatPace(double pace)
        {
            int minutes = (int)pace;
            int seconds = (int)((pace - minutes) * 60);
            return $"{minutes}:{seconds:D2} min/km";
        }
    }
}
