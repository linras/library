using Library.Server.Helpers;
using Library.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Library.Server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase {
        private static List<Book> Books => BookDB.Books;

        [HttpGet]
        public IEnumerable<Book> Get() {
            return Books;
        }

        [HttpGet("{id:int}")]
        public ActionResult<Book> Get(int id) {
            var book = Books.FirstOrDefault(b => b.Id == id);
            if (book == null) {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public ActionResult<Book> Post(Book book) {
            book.Id = Books.Max(b => b.Id) + 1;
            Books.Add(book);
            return book;
        }

        [HttpPut("{id}")]
        public ActionResult<Book> Put(int id, Book updatedBook) {
            var book = Books.FirstOrDefault(b => b.Id == id);
            if (book == null) {
                return NotFound();
            }

            book.Title    = updatedBook.Title;
            book.Author   = updatedBook.Author;
            book.Category = updatedBook.Category;
            return Ok(book);
        }

        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<Book>> Delete(int id) {
            var book = Books.FirstOrDefault(b => b.Id == id);
            if (book == null) {
                return NotFound();
            }

            Books.Remove(book);
            return Ok(Books);
        }
    }
}
