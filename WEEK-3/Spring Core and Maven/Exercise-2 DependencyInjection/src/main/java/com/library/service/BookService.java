package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

	private BookRepository bookRepository;

	// ✅ This setter is crucial for Spring's injection
	public void setBookRepository(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}

	public String findBookId(int id) {
		return "Book id: " + bookRepository.getId(id);
	}
}


