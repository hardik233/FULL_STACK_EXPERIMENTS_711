import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public List<String> getStudents() {

        List<String> students = new ArrayList<>();
        students.add("Rahul");
        students.add("Anjali");
        students.add("Aman");

        return students;
    }
}