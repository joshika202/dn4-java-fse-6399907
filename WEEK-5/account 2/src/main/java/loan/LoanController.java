package loan;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        Loan loan = new Loan();
        loan.setNumber(number);
        loan.setType("home");
        loan.setAmount(500000);
        loan.setEmi(13500);
        return loan;
    }
}
