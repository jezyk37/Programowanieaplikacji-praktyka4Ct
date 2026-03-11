namespace appMenu2;

public partial class Galeria : ContentPage
{
	public Galeria()
	{
		InitializeComponent();
	}

    private async void OnZoomClicked(object sender, EventArgs e)
    {
		await MainImage.ScaleTo(1.5, 300);
		await MainImage.ScaleTo(1, 300);

    }
}