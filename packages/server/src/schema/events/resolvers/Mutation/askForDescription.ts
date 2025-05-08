import { chatCompletition } from '../../../../ai.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const askForDescription: NonNullable<MutationResolvers['askForDescription']> = async (_parent, { input }, _ctx) => {
  const prompt = `
Context:
Acționezi ca un asistent AI specializat în crearea de conținut captivant pentru o aplicație de gestionare a evenimentelor sociale. Această aplicație, posibil dezvoltată folosind caracteristici moderne JavaScript (ESNext) și structurată ca un monorepo gestionat cu pnpm, permite utilizatorilor (organizatori și participanți) să creeze și să participe la diverse evenimente. Interfața vizuală (frontend) ar putea fi construită cu Vue, comunicând printr-o API GraphQL (poate folosind Yoga GraphQL ca server și Prisma ORM pentru interacțiunea cu baza de date) pentru a prelua și afișa detaliile evenimentelor. O descriere bună a evenimentului este esențială pentru a atrage participanți.

Sarcina ta:
Un utilizator al aplicației îți va furniza o descriere inițială pentru un eveniment pe care dorește să îl creeze. Misiunea ta este să analizezi această descriere și să generezi o versiune nouă, îmbunătățită. Noua descriere trebuie să fie mai atrăgătoare, mai clară, mai concisă (unde este cazul) și mai informativă, astfel încât să maximizeze interesul potențialilor participanți.

Descrierea inițială furnizată de utilizator:
{ input }

Ce ar trebui să urmărești în descrierea îmbunătățită:

Claritate: Asigură-te că scopul principal, publicul țintă și natura evenimentului sunt evidente.
Atractivitate: Folosește un limbaj care să stârnească curiozitatea și entuziasmul. Poți folosi întrebări retorice, un ton mai vibrant sau poți evidenția beneficiile unice ale participării.
Informații Esențiale: Chiar dacă nu sunt toate prezente în original, încearcă să structurezi textul astfel încât să sugereze ce informații ar fi importante (de ex., "ce se va întâmpla", "de ce să participi", "cui se adresează"). Dacă detalii precum data, ora sau locația sunt menționate vag, integrează-le mai natural sau subliniază importanța lor.
Ton: Adoptă un ton potrivit pentru un eveniment social - poate fi prietenos, energic, profesionist, dar relaxat, în funcție de specificul sugerat de descrierea inițială.
Concizie și Impact: Elimină redundanțele și exprimările vagi. Fiecare cuvânt ar trebui să contribuie la mesajul general.
Corectitudine: Asigură-te că textul rezultat este corect din punct de vedere gramatical și stilistic.
Generează mai jos descrierea îmbunătățită. Este esențial ca întreaga descriere îmbunătățită să fie formulată exclusiv în limba română:
  `
  const res = await chatCompletition(prompt)
  return res
}
