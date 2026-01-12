using System;

namespace Oceny
{
    public class OcenyUczniow
    {
        private int[] oceny = new int[0];

        public void DodajOcene(int ocena)
        {
            if (ocena < 1 || ocena > 5)
            {
                throw new ArgumentException("Zła ocena");
            }

            int[] nowa = new int[oceny.Length + 1];

            for (int i = 0; i < oceny.Length; i++)
            {
                nowa[i] = oceny[i];
            }

            nowa[oceny.Length] = ocena;
            oceny = nowa;
        }

        public double Srednia()
        {
            if (oceny.Length == 0)
            {
                throw new InvalidOperationException("Brak ocen");
            }

            int suma = 0;

            for (int i = 0; i < oceny.Length; i++)
            {
                suma += oceny[i];
            }

            return (double)suma / oceny.Length;
        }

        public int Maksymalna()
        {
            if (oceny.Length == 0)
            {
                throw new InvalidOperationException("Brak ocen");
            }

            int max = oceny[0];

            for (int i = 1; i < oceny.Length; i++)
            {
                if (oceny[i] > max)
                {
                    max = oceny[i];
                }
            }

            return max;
        }

        public int Minimalna()
        {
            if (oceny.Length == 0)
            {
                throw new InvalidOperationException("Brak ocen");
            }

            int min = oceny[0];

            for (int i = 1; i < oceny.Length; i++)
            {
                if (oceny[i] < min)
                {
                    min = oceny[i];
                }
            }

            return min;
        }

        public bool CzyZaliczone()
        {
            return Srednia() >= 2.0;
        }
    }
}
