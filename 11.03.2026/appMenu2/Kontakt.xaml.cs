using System.Threading.Tasks;

namespace appMenu2;

public partial class Kontakt : ContentPage
{
	public Kontakt()
	{
		InitializeComponent();
	}

    private async void WyslijWiadomosc(object sender, EventArgs e)
    {
		if (string.IsNullOrWhiteSpace(TitleEntry.Text) || string.IsNullOrEmpty(MessageEditor.Text))
		{
			await DisplayAlert("B³¹d", "Uzupe³nij wszystkie pola", "ok");
			return;
		}

		await DisplayAlert("Sukces", "Wiadomoœæ wys³ana", "ok");
		TitleEntry.Text = "";
		MessageEditor.Text = "";
    }
}