# Zadanie 11: Wyświetlanie aktualnej daty i czasu

## Cel zadania

Stwórz aplikację wyświetlającą aktualną datę i czas w różnych formatach używając metod obiektu Date w JavaScript.

## Wymagania funkcjonalne

Aplikacja powinna automatycznie wyświetlać aktualną datę i czas po załadowaniu strony oraz umożliwiać odświeżenie danych przyciskiem. Aplikacja powinna wyświetlać:

1. **Aktualną datę** - w formacie DD.MM.YYYY (np. "15.03.2024")
2. **Aktualny czas** - w formacie HH:MM:SS (np. "14:30:45")
3. **Dzień tygodnia** - pełna nazwa dnia tygodnia (np. "Poniedziałek")
4. **Nazwa miesiąca** - pełna nazwa miesiąca (np. "Styczeń")
5. **Pełna informacja** - tekst w formacie: "Dzisiaj jest [dzień tygodnia], [data], godzina [czas]"

## Metody do wykorzystania

W rozwiązaniu należy użyć następujących metod obiektu Date:

- `new Date()` - utworzenie obiektu reprezentującego aktualną datę i czas
- `getFullYear()` - pobranie roku (4 cyfry)
- `getMonth()` - pobranie miesiąca (0-11, gdzie 0 = styczeń)
- `getDate()` - pobranie dnia miesiąca (1-31)
- `getDay()` - pobranie dnia tygodnia (0-6, gdzie 0 = niedziela)
- `getHours()` - pobranie godziny (0-23)
- `getMinutes()` - pobranie minut (0-59)
- `getSeconds()` - pobranie sekund (0-59)

**Manipulacja DOM:**

- `getElementById()`
- `addEventListener()` (do obsługi zdarzeń)
- Atrybut `defer` w tagu `<script>` (opóźnia wykonanie skryptu do momentu załadowania DOM)

## Uwagi

- Metoda `getMonth()` zwraca wartości od 0 do 11, więc należy dodać 1 aby uzyskać rzeczywisty numer miesiąca
- Metoda `getDay()` zwraca wartości od 0 (niedziela) do 6 (sobota) - należy utworzyć tablicę z nazwami dni tygodnia
- Należy utworzyć tablicę z nazwami miesięcy (styczeń = 0, luty = 1, itd.)
- Wartości godzin, minut i sekund mogą być jednocyfrowe - należy dodać zero z przodu jeśli wartość jest mniejsza niż 10 (np. "09" zamiast "9")
- Wartości dnia i miesiąca również mogą wymagać dodania zera z przodu dla formatu DD.MM.YYYY
- Funkcja wyświetlająca datę i czas powinna być wywołana zarówno przy załadowaniu strony, jak i po kliknięciu przycisku odświeżania
- Interfejs użytkownika jest już przygotowany - należy uzupełnić funkcję `displayDateTime()` w pliku `zadanie_11.js`
- Należy dodać event listener do przycisku używając `addEventListener()` (przycisk ma ID: `refreshBtn`)
- Skrypt ma atrybut `defer`, więc można od razu używać `getElementById()` bez `DOMContentLoaded` - skrypt wykonuje się po załadowaniu DOM
- W stopce strony należy uzupełnić pola z imieniem, nazwiskiem i klasą
- W sekcji `<head>` należy uzupełnić znaczniki `<meta>` z informacjami o autorze (imię, nazwisko, klasa)

## Przykładowe dane testowe

Po uruchomieniu aplikacji powinny zostać wyświetlone aktualne wartości, np.:

- **Data:** "15.03.2024"
- **Czas:** "14:30:45"
- **Dzień tygodnia:** "Piątek"
- **Nazwa miesiąca:** "Marzec"
- **Pełna informacja:** "Dzisiaj jest Piątek, 15.03.2024, godzina 14:30:45"

Uwaga: wartości będą się zmieniać w zależności od aktualnej daty i czasu.
