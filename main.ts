interface Book { title: string; author: string; borrowed: boolean; id: number; }
class Newbook {
  private books: Book[] = [];
  addbook(book: Book): void {
    this.books.push(book);
  }
  borrowbooks(id: number): string {
    const bezz = this.books.find(j => j.id === id);
    if (!bezz) { return "book not found"; }
    if (bezz.borrowed) { return "book already borrowed"; }
    bezz.borrowed = true; return `you borrowed the book ${bezz.title}`;
  }
  returnbook(id: number): string | undefined {
      const bezz = this.books.find(j => j.id === id);
      if (!bezz) { return "invalid book"; }
      if (!bezz.borrowed) { return "u already returned the book"; }
      bezz.borrowed = false; return `you returned the book ${bezz.title}`
  }
  listavailable(): Book[] {
    return this.books.filter(j => !j.borrowed);
  }
  listunavailable(): Book[] {
    return this.books.filter(j => j.borrowed);
  }
}