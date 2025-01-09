# GA

Gymnasiearbete

KRAV
Spara användare för både klienter och ägare
Användare ska kunna spara produkter 
Det ska finnes en shopping cart
    Lägga till, ta bort, ändra kvantitet, spara varukorg mellan sessioner
Användargränssnitt för butiksägare
    Kan lägga till, ta bort och redigera
        Kan redigera text och bilder. 
Det ska vara säkert
LagerHantering
Kategorier; Typer, pris, färg, storlek

Bonus:
Tvåfaktorsautentisering
Betalning
Återställ lösenord
Sessioner och cookies
Säkerhet
    SSL-certifikat, HTTPS.
    Skydda mot attacker: Skydd mot vanliga webbsäkerhetshot som SQL-injektioner, XSS (Cross-site scripting), CSRF (Cross-Site Request Forgery) och brute force-attacker.
    Säkra sessioner: Hantera sessioner med timeout och använd säkra cookies för att förhindra session hijacking.
    Dataskydd: GDPR
Snabb laddningstid; Komprimerade bilder, cache-tekniker. CDN 
Recensioner

Loggning: Systemet bör logga användaraktivitet, t.ex. inloggningar, produktförändringar, och fel, för att kunna diagnostisera problem och identifiera potentiella säkerhetsrisker.
Övervakning: Se till att webbplatsen övervakas för prestanda och eventuella säkerhetsintrång.
Design

2024-12-09
Det startade med att jag skulle göra en webbbutik där jag fokuserade på baksidan och där jag hade som mål att kunna lagra produkter och användare. Men nu ska jag även ha som mål att skapa ett användargränssnitt för webbutikens ägare så att hen enkelt kan redigera: namn, pris och bilde, ta bort och lägga till produkter.

Idag började jag att lära mig React genom att kolla på Mosh 1.20h tutorial.

2024-12-12
React kan inte returna 2 element. Måste därför wrappa allting inom en fragment.
For loop finns inte så man måste använda en metod som kallas mapping
Ex.
Const items = ['Item 1', 'item 2', 'item 3'];
map(item => <li>{item}<li> )
Detta skriver ut en lista med innehållet i items.

2025-01-03
Type annotation, speciferar vilken typ av varibel/parameter. Importerade typen först. 

&& istället för ? om man ska ha null som resultat, därför att && innebär att man skriver ut det som står i if-satsen om det är korrekt och om det är falskt skrivs ingenting ut. 

2025-01-08
Components have states and when the component changes react will update the DOM to change the components state. 

const [selectedIndex, setSelectedIndex] = useState(-1);
onClick={() => {
              setSelectedIndex(index);
            }}

Each component is gonig to have its own state

2025-01-09
Children prop
