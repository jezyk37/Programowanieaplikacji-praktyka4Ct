

namespace MauiApp2
{
    public partial class MainPage : ContentPage
    {
       

        public MainPage()
        {
            InitializeComponent();
        }

        private void OnCalcuateClicked(object? sender, EventArgs e)
        {
        if (int.TryParse(AgeEntry.Text, out int age) && int.TryParse(RestHR_Entry.Text, out int restingHR))
            {
                int maxHR = 220 - age;
                int reserveHR = maxHR - restingHR;

                int moderateMin = (int)(reserveHR * 0.5 + restingHR);
                int moderateMax = (int)(reserveHR * 0.7  + restingHR);

                int intenseMin = (int)(reserveHR * 0.7 + restingHR);
                int intenseMax = (int)(reserveHR * 0.85 + reserveHR);

                MaxHeartLabel.Text = $"Maksymalne tętno: {maxHR} bpm";
                MaxHeartLabel.TextColor = Colors.Red;

                ModerateLabel.Text = $"{moderateMin} - {moderateMax} bpm";
                ModerateLabel.TextColor = Colors.Orange;

                IntenseLabel.Text = $"{intenseMin} - {intenseMax} bpm";
                IntenseLabel.TextColor = Colors.Green;
            }
        }
       

    }
}
