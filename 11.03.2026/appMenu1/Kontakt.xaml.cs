using System.Threading.Tasks;

namespace appMenu1;

public partial class Kontakt : ContentPage
{
	public Kontakt()
	{
		InitializeComponent();
	}

    private async void poKliknieciuWyslij(object sender, EventArgs e)
    {
		await DisplayAlert("Wys³ano ", $"Tytu³: {EntryTytul.Text}\n: {WiadomoscEdytor.Text}", " ok");
		EntryTytul.Text = "";
		WiadomoscEdytor.Text = "";
    }
}