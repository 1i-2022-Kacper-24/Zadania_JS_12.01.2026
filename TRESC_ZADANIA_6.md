# Zadanie 6: Konwerter formatów dat

## Cel zadania

Stwórz konwerter formatów dat używając metod obiektu String do manipulacji i konwersji tekstu.

## Wymagania funkcjonalne

Aplikacja powinna umożliwiać użytkownikowi wprowadzenie daty w formacie DD-MM-YYYY, a następnie wykonać następujące operacje:

1. **Walidacja formatu** - sprawdzić czy data ma poprawny format DD-MM-YYYY
2. **Wyodrębnienie części** - wyświetlić osobno dzień (DD), miesiąc (MM) i rok (YYYY)
3. **Konwersja na YYYY-MM-DD** - przekonwertować datę na format YYYY-MM-DD
4. **Konwersja na DD.MM.YYYY** - przekonwertować datę na format z kropkami zamiast myślników
5. **Data bez separatorów** - utworzyć datę w formacie DDMMYYYY (bez separatorów)
6. **Data z odwróconym rokiem** - utworzyć datę w formacie YYYY-MM-DD używając metod tablicowych

## Metody do wykorzystania

W rozwiązaniu należy użyć następujących metod obiektu String:

- `split()` (do podziału daty na części)
- `join()` (metoda tablicy, do łączenia części)
- `substring()` lub `slice()` (do wyodrębniania części)
- `concat()` lub operator `+` (do łączenia stringów)
- `length` (właściwość, do sprawdzenia długości)

**Metody tablic:**

- `split()` (String -> Array)
- `reverse()` (do odwrócenia kolejności części)
- `join()` (Array -> String)

**Manipulacja DOM:**

- `getElementById()`
- `addEventListener()` (do obsługi zdarzeń)
- Atrybut `defer` w tagu `<script>` (opóźnia wykonanie skryptu do momentu załadowania DOM)

## Uwagi

- Należy obsłużyć przypadek, gdy użytkownik nie wprowadzi daty
- Należy sprawdzić czy data ma format DD-MM-YYYY:
  - Sprawdź czy po podziale na "-" są 3 części
  - Sprawdź czy każda część ma odpowiednią długość (DD=2 znaki, MM=2 znaki, YYYY=4 znaki)
- Do konwersji DD-MM-YYYY na YYYY-MM-DD użyj `split('-')`, `reverse()`, `join('-')`
- Interfejs użytkownika jest już przygotowany - należy uzupełnić funkcję `convertDate()` w pliku `zadanie_6.js`
- Należy dodać event listenery do przycisków używając `addEventListener()` (przyciski mają ID: `convertBtn` i `clearBtn`)
- Skrypt ma atrybut `defer`, więc można od razu używać `getElementById()` bez `DOMContentLoaded` - skrypt wykonuje się po załadowaniu DOM

## Przykładowe dane testowe

- **Wejście:** "15-03-2024"
- **Oczekiwane wyniki:**
  - Dzień: "15"
  - Miesiąc: "03"
  - Rok: "2024"
  - Format YYYY-MM-DD: "2024-03-15"
  - Format DD.MM.YYYY: "15.03.2024"
  - Data bez separatorów: "15032024"
  - Data z odwróconym rokiem: "2024-03-15"
