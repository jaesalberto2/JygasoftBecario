using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("¡Hola desde C#!");

        Console.WriteLine("!Hola con conflicto");
        Console.WriteLine("Ingrese su nombre:");
        string nombre = Console.ReadLine();
        Console.WriteLine("¡Hola, " + nombre + "!");
    }
}
