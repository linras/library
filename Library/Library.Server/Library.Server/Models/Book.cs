namespace Library.Server.Models {
    public class Book {
        public int          Id       { get; set; }
        public string       Title    { get; set; }
        public string       Author   { get; set; }
        public BookCategory Category { get; set; }
    }

    public enum BookCategory {
        ScienceFiction,
        Classic,
        Philosophy,
        Cooking,
        Horror
    }
}
