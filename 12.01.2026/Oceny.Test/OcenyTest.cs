using NUnit.Framework;
using System;
using Oceny;

namespace Oceny.Test
{
    public class OcenyTest
    {
        private OcenyUczniow _oceny;

        [SetUp]
        public void SetUp()
        {
            _oceny = new OcenyUczniow();
        }

        [Test]
        public void DodajOcene_poprawna_ocena_dziala()
        {
            // Arrange
            _oceny.DodajOcene(4);
            _oceny.DodajOcene(5);

            // Act
            double wynik = _oceny.Srednia();

            // Assert
            Assert.That(wynik, Is.EqualTo(4.5));
        }

        [Test]
        public void DodajOcene_zla_ocena_rzuca_wyjatek()
        {
            Assert.Throws<ArgumentException>(() => _oceny.DodajOcene(6));
        }

        [Test]
        public void Srednia_liczy_poprawnie()
        {
            _oceny.DodajOcene(3);
            _oceny.DodajOcene(4);

            double wynik = _oceny.Srednia();

            Assert.That(wynik, Is.EqualTo(3.5));
        }

        [Test]
        public void Maksymalna_zwraca_najwyzsza_ocene()
        {
            _oceny.DodajOcene(2);
            _oceny.DodajOcene(5);
            _oceny.DodajOcene(3);

            int wynik = _oceny.Maksymalna();

            Assert.That(wynik, Is.EqualTo(5));
        }

        [Test]
        public void Minimalna_zwraca_najnizsza_ocene()
        {
            _oceny.DodajOcene(2);
            _oceny.DodajOcene(5);
            _oceny.DodajOcene(3);

            int wynik = _oceny.Minimalna();

            Assert.That(wynik, Is.EqualTo(2));
        }

        [Test]
        public void CzyZaliczone_gdy_srednia_ponizej_2_false()
        {
            _oceny.DodajOcene(2);
            _oceny.DodajOcene(1);

            bool wynik = _oceny.CzyZaliczone();

            Assert.That(wynik, Is.False);
        }

        [Test]
        public void Brak_ocen_rzuca_wyjatek()
        {
            Assert.Throws<InvalidOperationException>(() => _oceny.Srednia());
        }
    }
}
