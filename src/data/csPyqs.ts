export interface PyqQuestion {
  id: number;
  type: "MCQ" | "AR" | "SA" | "LA";
  tag: string;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface PyqChapterInfo {
  chapter_num: number;
  unit_num: number;
  title: string;
  unit_title: string;
  weightage_unit: string;
}

export interface PyqChapter {
  info: PyqChapterInfo;
  questions: PyqQuestion[];
}

export const CS_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "unit_num": 1,
      "title": "Review of Python Basics",
      "unit_title": "Unit I: Computational Thinking and Programming - 2",
      "weightage_unit": "40 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following is an invalid identifier in Python?",
        "answer": "(b) 2nd_name",
        "explanation": "An identifier in Python cannot start with a digit (0-9). It must begin with an alphabet (a-z, A-Z) or an underscore (_). Therefore, '2nd_name' is invalid.",
        "options": [
          "(a) _eval",
          "(b) 2nd_name",
          "(c) True_val",
          "(d) my_var_1"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What will be the output of the following Python expression?\n>>> print(16 // 3 + 4 ** 2 % 5)",
        "answer": "(a) 6",
        "explanation": "Operator precedence: exponentiation (**), then floor division (//) and modulus (%), then addition (+).\n4 ** 2 = 16\n16 // 3 = 5\n16 % 5 = 1\n5 + 1 = 6.",
        "options": [
          "(a) 6",
          "(b) 7",
          "(c) 5",
          "(d) 8"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following data types in Python is mutable?",
        "answer": "(c) List",
        "explanation": "Lists are mutable in Python; their elements can be modified, added, or removed in-place after creation. Tuples, strings, and integers are immutable.",
        "options": [
          "(a) Tuple",
          "(b) String",
          "(c) List",
          "(d) Integer"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is the output of the following code snippet?\ns = \"Computer Science\"\nprint(s[3:12:2])",
        "answer": "(a) 'ptrSc'",
        "explanation": "s[3:12:2] slices from index 3 up to 11 with step 2.\nIndex 3: 'p'\nIndex 5: 't'\nIndex 7: 'r'\nIndex 9: 'S'\nIndex 11: 'c'\nResult is 'ptrSc'.",
        "options": [
          "(a) 'ptrSc'",
          "(b) 'puerS'",
          "(c) 'pue c'",
          "(d) 'ptr c'"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following operators has the highest precedence in Python?",
        "answer": "(a) **",
        "explanation": "The exponentiation operator (**) has the highest precedence among the given arithmetic and logical operators.",
        "options": [
          "(a) **",
          "(b) *",
          "(c) +",
          "(d) and"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What will be the output of the following code?\nd = {'A': 10, 'B': 20, 'C': 30}\nprint(d.get('D', 40))",
        "answer": "(c) 40",
        "explanation": "The dictionary get(key, default) method returns the value for key if key is in the dictionary; otherwise it returns the default value provided (40). Since 'D' is not in d, 40 is returned.",
        "options": [
          "(a) KeyError",
          "(b) None",
          "(c) 40",
          "(d) 30"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "What is the data type of the object created by: t = (5)?",
        "answer": "(b) int",
        "explanation": "To create a single-element tuple, a trailing comma is required, e.g., t = (5,). Without a comma, parentheses are evaluated as a mathematical grouping, making t an integer.",
        "options": [
          "(a) tuple",
          "(b) int",
          "(c) list",
          "(d) set"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What will be the output of the following Python code?\nL = [10, 20, 30, 40, 50]\nL.pop(2)\nL.remove(40)\nprint(L)",
        "answer": "(a) [10, 20, 50]",
        "explanation": "L.pop(2) removes the element at index 2 (which is 30), leaving [10, 20, 40, 50]. Then L.remove(40) searches and removes the value 40, leaving [10, 20, 50].",
        "options": [
          "(a) [10, 20, 50]",
          "(b) [10, 30, 50]",
          "(c) [10, 20, 40]",
          "(d) [20, 30, 50]"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following is NOT a keyword in Python?",
        "answer": "(a) eval",
        "explanation": "'eval' is a built-in function in Python, not a reserved keyword. 'assert', 'nonlocal', and 'pass' are reserved keywords.",
        "options": [
          "(a) eval",
          "(b) assert",
          "(c) nonlocal",
          "(d) pass"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What will be the output of the following expression?\n>>> print(bool('False') == False)",
        "answer": "(b) False",
        "explanation": "Any non-empty string in Python evaluates to True in a boolean context. Therefore, bool('False') evaluates to True. True == False is False.",
        "options": [
          "(a) True",
          "(b) False",
          "(c) None",
          "(d) Error"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What will be the output of the following code?\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        "answer": "(a) [1, 2, 3, 4]",
        "explanation": "Assignment 'y = x' creates an alias referencing the same list object in memory. Modifying y via append(4) directly modifies the underlying list, so print(x) outputs [1, 2, 3, 4].",
        "options": [
          "(a) [1, 2, 3, 4]",
          "(b) [1, 2, 3]",
          "(c) [4, 1, 2, 3]",
          "(d) Error"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is the output of the following code snippet?\ntext = \"Python#Exam#2024\"\nprint(text.split('#', 1))",
        "answer": "(a) ['Python', 'Exam#2024']",
        "explanation": "split(sep, maxsplit) splits at most maxsplit times. With maxsplit = 1, it splits only at the first '#' character, yielding ['Python', 'Exam#2024'].",
        "options": [
          "(a) ['Python', 'Exam#2024']",
          "(b) ['Python', 'Exam', '2024']",
          "(c) 'Python Exam#2024'",
          "(d) ['Python#Exam', '2024']"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following functions generates a random integer between a and b (both inclusive)?",
        "answer": "(a) random.randint(a, b)",
        "explanation": "random.randint(a, b) returns a random integer N such that a <= N <= b (both endpoints inclusive). randrange(a, b) excludes b.",
        "options": [
          "(a) random.randint(a, b)",
          "(b) random.random(a, b)",
          "(c) random.randrange(a, b)",
          "(d) random.uniform(a, b)"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What will be the output of the following code?\na = (10, 20, 30, 40)\nprint(a[-1:-4:-1])",
        "answer": "(a) (40, 30, 20)",
        "explanation": "Negative indexing slices backwards from index -1 (40) down to index -3 (20) with step -1 (stopping before index -4). The tuple returned is (40, 30, 20).",
        "options": [
          "(a) (40, 30, 20)",
          "(b) (40, 30, 20, 10)",
          "(c) (10, 20, 30)",
          "(d) ()"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What will be the output of the following code?\nd = {1: 'One', 2: 'Two', 3: 'Three'}\nd[2] = 'Second'\nd[4] = 'Four'\nprint(len(d))",
        "answer": "(a) 4",
        "explanation": "d[2] = 'Second' updates existing key 2. d[4] = 'Four' inserts a new key-value pair. The dictionary now contains 4 keys (1, 2, 3, 4), so len(d) = 4.",
        "options": [
          "(a) 4",
          "(b) 3",
          "(c) 5",
          "(d) 2"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following statements about Python strings is FALSE?",
        "answer": "(a) Strings are mutable",
        "explanation": "Strings in Python are immutable; attempting to modify an individual character (e.g. s[0] = 'a') raises a TypeError.",
        "options": [
          "(a) Strings are mutable",
          "(b) Strings can be indexed using positive and negative indices",
          "(c) Strings can be sliced using [start:stop:step]",
          "(d) Strings can be concatenated using the '+' operator"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the output of the following code?\nval = [i ** 2 for i in range(1, 5) if i % 2 == 0]\nprint(val)",
        "answer": "(a) [4, 16]",
        "explanation": "range(1, 5) yields 1, 2, 3, 4. Even numbers are 2 and 4. Squares are 2² = 4 and 4² = 16. The list is [4, 16].",
        "options": [
          "(a) [4, 16]",
          "(b) [1, 4, 9, 16]",
          "(c) [4, 9, 16]",
          "(d) [2, 4]"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The identity operator in Python is:",
        "answer": "(a) is",
        "explanation": "'is' and 'is not' are identity operators in Python that test whether two variables reference the exact same object in memory. 'in' is a membership operator.",
        "options": [
          "(a) is",
          "(b) in",
          "(c) ==",
          "(d) not in"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What will be the output of the following code?\ns = \"Hello World\"\nprint(s.replace('l', 'x', 2))",
        "answer": "(a) Hexxo World",
        "explanation": "replace(old, new, count) replaces at most 'count' occurrences of 'old' with 'new'. Only the first 2 'l's in 'Hello' are replaced with 'x', giving 'Hexxo World'.",
        "options": [
          "(a) Hexxo World",
          "(b) Hexxo Worxd",
          "(c) Hexlo World",
          "(d) Error"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What will be the output of the following expression?\n>>> print(not(20 > 10 and 15 < 30))",
        "answer": "(a) False",
        "explanation": "20 > 10 is True, 15 < 30 is True. True and True is True. not(True) is False.",
        "options": [
          "(a) False",
          "(b) True",
          "(c) Error",
          "(d) None"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What will be the output of the following code?\nx = 5\nwhile x > 0:\n    x -= 2\nelse:\n    print(\"Done\", x)",
        "answer": "(a) Done -1",
        "explanation": "Iteration 1: x = 5 - 2 = 3. Iteration 2: x = 3 - 2 = 1. Iteration 3: x = 1 - 2 = -1. Loop terminates because -1 > 0 is False. The 'else' block executes and prints 'Done -1'.",
        "options": [
          "(a) Done -1",
          "(b) Done 0",
          "(c) Done 1",
          "(d) Loop will not terminate"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "What is the return type of the function id() in Python?",
        "answer": "(a) int",
        "explanation": "The id() function in Python returns the unique identity (memory address integer) of an object as an int.",
        "options": [
          "(a) int",
          "(b) str",
          "(c) float",
          "(d) hex"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What will be the output of the following code?\nt = (1, 2, [3, 4])\nt[2].append(5)\nprint(t)",
        "answer": "(a) (1, 2, [3, 4, 5])",
        "explanation": "While the tuple itself is immutable (its references cannot change), the list inside the tuple at index 2 is mutable. Appending 5 modifies the list in place without changing its reference. Result is (1, 2, [3, 4, 5]).",
        "options": [
          "(a) (1, 2, [3, 4, 5])",
          "(b) TypeError",
          "(c) (1, 2, [3, 4], 5)",
          "(d) (1, 2, 3, 4, 5)"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following methods can be used to remove all items from a dictionary?",
        "answer": "(a) clear()",
        "explanation": "The dict.clear() method removes all elements from the dictionary, leaving it empty ({}).",
        "options": [
          "(a) clear()",
          "(b) remove()",
          "(c) delete()",
          "(d) pop()"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What will be the output of the following code?\nL = ['apple', 'banana', 'cherry']\nprint(''.join(L))",
        "answer": "(a) 'applebananacherry'",
        "explanation": "The join() method concatenates elements of an iterable using the string on which it is called as a delimiter. With an empty string '', it concatenates them directly into 'applebananacherry'.",
        "options": [
          "(a) 'applebananacherry'",
          "(b) 'apple banana cherry'",
          "(c) ['apple', 'banana', 'cherry']",
          "(d) 'apple,banana,cherry'"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Dictionary keys in Python must be of immutable types.\nReason (R): Dictionary keys must be hashable so that Python can quickly locate values in memory.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Python dictionaries are implemented using hash tables. Only immutable objects (strings, numbers, tuples with immutable items) have a fixed hash value and are hashable.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The expression '3' * 2 results in 6.\nReason (R): The multiplication operator (*) when used with a string and an integer performs string replication.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because '3' * 2 yields the replicated string '33', not integer 6. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The statement L = [1, 2, 3] creates a list, and L[1] = 5 updates the second element to 5.\nReason (R): Lists in Python are mutable data structures.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R directly explains why item assignment L[1] = 5 is allowed.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A tuple cannot be modified after its creation, but if an element of the tuple is a list, that list can be modified.\nReason (R): The immutability of a tuple applies only to the object references stored in the tuple, not to the contents of mutable objects referenced.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R gives the precise technical mechanism of tuple immutability.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The 'break' statement terminates the current loop and resumes execution at the next statement outside the loop.\nReason (R): The 'continue' statement terminates the loop entirely and prevents any further iterations.",
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is TRUE. Reason R is FALSE: 'continue' skips only the remaining statements of the current iteration and moves to the next iteration; it does not terminate the loop entirely.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Differentiate between mutable and immutable data types in Python. Give two examples of each.",
        "answer": "Explanation of mutable vs immutable with examples",
        "explanation": "1. Definition [1 Mark]:\n- Mutable data types: Those whose values or content can be changed in-place after creation without altering their memory identity. Examples: List, Dictionary, Set. [0.5 Mark]\n- Immutable data types: Those whose values cannot be changed in-place after creation. Any modification creates a new object in memory. Examples: Integer, Float, String, Tuple. [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find and write the output of the following Python code:\ns = \"Pre-Board@2024\"\nm = \"\"\nfor ch in s:\n    if ch.isupper():\n        m += ch.lower()\n    elif ch.islower():\n        m += ch.upper()\n    elif ch.isdigit():\n        m += str(int(ch) * 2)\n    else:\n        m += \"#\"\nprint(m)",
        "answer": "pRE#bOARD#4048",
        "explanation": "Tracing characters [1 Mark]:\n'P' (upper) -> 'p'\n'r' (lower) -> 'R'\n'e' (lower) -> 'E'\n'-' (special) -> '#'\n'B' (upper) -> 'b'\n'o' (lower) -> 'O'\n'a' (lower) -> 'A'\n'r' (lower) -> 'R'\n'd' (lower) -> 'D'\n'@' (special) -> '#'\n'2' (digit) -> str(2*2) = '4'\n'0' (digit) -> str(0*2) = '0'\n'2' (digit) -> str(2*2) = '4'\n'4' (digit) -> str(4*2) = '8'\nFinal string output: 'pRE#bOARD#4048' [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Rewrite the following code in Python after removing all syntax errors. Underline each correction:\n30 = Val\nfor I in range(0, Val)\n    if I % 4 == 0:\n        print(I * 4)\n    Else:\n        print(I + 10)",
        "answer": "Corrected code with 4 errors identified",
        "explanation": "Corrected Code:\nVal = 30                          # Correction 1: Variable name must be on LHS [0.75 Mark]\nfor I in range(0, Val):           # Correction 2: Missing colon (:) at end of for [0.75 Mark]\n    if I % 4 == 0:\n        print(I * 4)\n    else:                         # Correction 3: 'Else' must be in lowercase 'else:' [0.75 Mark]\n        print(I + 10)             # Correction 4: Proper indentation [0.75 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "What is the difference between pop() and remove() methods of a list in Python? Illustrate with an example.",
        "answer": "Comparison of pop() and remove()",
        "explanation": "1. Difference [1 Mark]:\n- pop([index]): Removes and returns the element at the specified index (default is the last element index -1). Raises IndexError if index is out of range.\n- remove(value): Searches and removes the first occurrence of the specified value. Does not return the element. Raises ValueError if value is not found.\n2. Example [1 Mark]:\nL = [10, 20, 30, 20]\nx = L.pop(1)      # x = 20, L becomes [10, 30, 20]\nL.remove(20)      # L becomes [10, 30]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Find the output of the following Python code:\ndef Change(P, Q = 30):\n    P = P + Q\n    Q = P - Q\n    print(P, \"#\", Q)\n    return P\n\nR = 150\nS = 100\nR = Change(R, S)\nprint(R, \"#\", S)\nS = Change(S)\nprint(R, \"#\", S)",
        "answer": "250 # 150 \\n 250 # 100 \\n 130 # 100 \\n 250 # 130",
        "explanation": "Tracing [1 Mark per block]:\n1. R = Change(150, 100):\n   P = 150 + 100 = 250\n   Q = 250 - 100 = 150\n   Prints: 250 # 150\n   Returns 250 => R = 250.\n   print(R, \"#\", S) prints: 250 # 100.\n2. S = Change(100) (Q defaults to 30):\n   P = 100 + 30 = 130\n   Q = 130 - 30 = 100\n   Prints: 130 # 100\n   Returns 130 => S = 130.\n   print(R, \"#\", S) prints: 250 # 130."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is the difference between '==' and 'is' operators in Python? Demonstrate with code.",
        "answer": "Value equality (==) vs Reference identity (is)",
        "explanation": "1. Difference [1 Mark]:\n- '==' (Equality operator) checks if the values of two operands are equal.\n- 'is' (Identity operator) checks if both variables refer to the exact same memory location (same object).\n2. Example [1 Mark]:\nL1 = [1, 2, 3]\nL2 = [1, 2, 3]\nprint(L1 == L2)   # True (same values)\nprint(L1 is L2)   # False (different memory addresses)"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write a Python program to input a list of integers and count the number of even numbers and odd numbers present in the list.",
        "answer": "Python code for counting even and odd integers",
        "explanation": "Marking Scheme:\n1. Input and initialization [1 Mark]:\nnumbers = eval(input(\"Enter list of integers: \"))\neven_count = 0\nodd_count = 0\n\n2. Loop and check condition [1 Mark]:\nfor num in numbers:\n    if num % 2 == 0:\n        even_count += 1\n    else:\n        odd_count += 1\n\n3. Display results [1 Mark]:\nprint(\"Even count:\", even_count)\nprint(\"Odd count:\", odd_count)"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Explain the use of the 'pass' statement in Python with a suitable example.",
        "answer": "Explanation and example of pass statement",
        "explanation": "1. Explanation [1 Mark]:\n'pass' is a null statement in Python. The interpreter does not ignore it, but nothing happens when it executes. It is used as a syntactic placeholder where code will eventually go, avoiding IndentationError.\n2. Example [1 Mark]:\ndef calculate_discount():\n    pass  # To be implemented later\n\nfor i in range(5):\n    if i == 2:\n        pass\n    print(i)"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Find the output of the following code:\nmsg = \"cbse.nic.in\"\nnew_msg = \"\"\nfor i in range(len(msg)):\n    if i % 2 == 0:\n        new_msg += msg[i].upper()\n    else:\n        new_msg += msg[i]\nprint(new_msg)",
        "answer": "CbSe.NiC.In",
        "explanation": "Length of msg is 11. Even index characters are converted to uppercase, odd index remain as is [1.5 Marks]:\nIndex 0: 'c' -> 'C'\nIndex 1: 'b' -> 'b'\nIndex 2: 's' -> 'S'\nIndex 3: 'e' -> 'e'\nIndex 4: '.' -> '.'\nIndex 5: 'n' -> 'n'\nIndex 6: 'i' -> 'I'\nIndex 7: 'c' -> 'c'\nIndex 8: '.' -> '.'\nIndex 9: 'i' -> 'i'\nIndex 10: 'n' -> 'N'\nOutput: CbSe.nIc.iN ... wait, let's trace: 0:'C', 1:'b', 2:'S', 3:'e', 4:'.', 5:'n', 6:'I', 7:'c', 8:'.', 9:'i', 10:'N' => CbSe.nIc.iN [1.5 Marks]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "How are dictionaries different from lists in Python in terms of indexing and element access?",
        "answer": "Positional vs Key-based indexing",
        "explanation": "1. Lists use 0-based integer position indexing (0, 1, 2...) for accessing elements, preserving sequential insertion order. [1 Mark]\n2. Dictionaries use custom user-defined keys (which can be any immutable hashable type like strings, integers, or tuples) to access associated values. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Write a Python program that accepts a string from the user and performs the following tasks:\n(a) Count and display the number of uppercase vowels and lowercase vowels separately.\n(b) Count and display the total number of digits and special characters.\n(c) Display the string in reverse order without using built-in reverse() or slicing [::-1].",
        "answer": "Python program for string character classification and manual reversal",
        "explanation": "Marking Scheme:\n1. Input and counter variables initialization [1 Mark]:\ns = input(\"Enter a string: \")\nup_vowels = 0\nlow_vowels = 0\ndigits = 0\nspecial = 0\n\n2. Classification loop [2 Marks]:\nfor ch in s:\n    if ch in 'AEIOU':\n        up_vowels += 1\n    elif ch in 'aeiou':\n        low_vowels += 1\n    elif ch.isdigit():\n        digits += 1\n    elif not ch.isalnum() and not ch.isspace():\n        special += 1\n\n3. Display counts [1 Mark]:\nprint(\"Uppercase Vowels:\", up_vowels)\nprint(\"Lowercase Vowels:\", low_vowels)\nprint(\"Digits:\", digits)\nprint(\"Special Characters:\", special)\n\n4. Reversal without slicing [1 Mark]:\nrev_str = \"\"\nfor i in range(len(s) - 1, -1, -1):\n    rev_str += s[i]\nprint(\"Reversed string:\", rev_str)"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Consider the following code snippet. Carefully trace and write the complete output:\ndef Display(L):\n    for i in range(len(L)):\n        if L[i] % 5 == 0:\n            L[i] //= 5\n        elif L[i] % 3 == 0:\n            L[i] //= 3\n        else:\n            L[i] *= 2\n\nNums = [25, 12, 7, 30, 9, 14]\nDisplay(Nums)\nfor val in Nums:\n    print(val, end=\"#\")",
        "answer": "5#4#14#6#3#28#",
        "explanation": "Marking Scheme:\n1. Detailed element-by-element tracing [3.5 Marks]:\n- L[0] = 25: 25 % 5 == 0 is True -> L[0] = 25 // 5 = 5. [0.5 Mark]\n- L[1] = 12: 12 % 5 != 0; 12 % 3 == 0 is True -> L[1] = 12 // 3 = 4. [0.5 Mark]\n- L[2] = 7: 7 % 5 != 0 and 7 % 3 != 0 -> L[2] = 7 * 2 = 14. [0.5 Mark]\n- L[3] = 30: 30 % 5 == 0 is True -> L[3] = 30 // 5 = 6. [0.75 Mark]\n- L[4] = 9: 9 % 5 != 0; 9 % 3 == 0 is True -> L[4] = 9 // 3 = 3. [0.5 Mark]\n- L[5] = 14: 14 % 5 != 0 and 14 % 3 != 0 -> L[5] = 14 * 2 = 28. [0.75 Mark]\n\n2. Output formatting with separator [1.5 Marks]:\nThe loop prints each modified element followed by '#':\n5#4#14#6#3#28#"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Write a Python program to maintain employee records using a dictionary where the employee ID is the key and a list containing [EmpName, Department, Salary] is the value. The program should provide functions to:\n(i) Add new employee records.\n(ii) Search and display details of employees working in a user-specified department.\n(iii) Display the employee with the highest salary.",
        "answer": "Complete Python dictionary application for employee management",
        "explanation": "Marking Scheme:\n1. Add Employee function [1.5 Marks]:\nemployees = {}\ndef add_employee(emp_id, name, dept, salary):\n    employees[emp_id] = [name, dept, salary]\n    print(\"Employee added successfully.\")\n\n2. Search by Department function [1.5 Marks]:\ndef search_by_dept(target_dept):\n    found = False\n    for emp_id, details in employees.items():\n        if details[1].lower() == target_dept.lower():\n            print(f\"ID: {emp_id}, Name: {details[0]}, Salary: {details[2]}\")\n            found = True\n    if not found:\n        print(\"No employees found in department:\", target_dept)\n\n3. Highest Salary function [1.5 Marks]:\ndef highest_salary():\n    if not employees:\n        print(\"No records found.\")\n        return\n    max_sal = -1\n    top_emp = None\n    for emp_id, details in employees.items():\n        if details[2] > max_sal:\n            max_sal = details[2]\n            top_emp = (emp_id, details[0], details[2])\n    print(f\"Highest Salary: ID: {top_emp[0]}, Name: {top_emp[1]}, Salary: {top_emp[2]}\")\n\n4. Code structure and syntax [0.5 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following case and answer the questions:\nCase Study: Student Grade Book Processing\nA teacher maintains a dictionary of students and their marks in three subjects: Physics, Chemistry, and Mathematics.\nStudentData = {\n    101: {'Name': 'Aman', 'Marks': [85, 90, 88]},\n    102: {'Name': 'Bhavna', 'Marks': [70, 65, 80]},\n    103: {'Name': 'Chirag', 'Marks': [92, 95, 96]}\n}\n(i) Write a statement to access the Chemistry marks (second subject) of Aman.\n(ii) Write code to calculate and display the percentage of each student (total marks out of 300).\n(iii) Write a function to display the names of students who scored an aggregate of 90% or above.\n(iv) Write a statement to update the Mathematics marks of Bhavna from 80 to 85.",
        "answer": "Solutions to Student Grade Book Case Study",
        "explanation": "(i) StudentData[101]['Marks'][1] [1 Mark]\n(ii) Code for percentage [1 Mark]:\nfor roll, info in StudentData.items():\n    total = sum(info['Marks'])\n    pct = (total / 300) * 100\n    print(f\"{info['Name']}: {pct:.2f}%\")\n(iii) Function for 90%+ students [1 Mark]:\ndef high_achievers():\n    for roll, info in StudentData.items():\n        if (sum(info['Marks']) / 300) * 100 >= 90:\n            print(info['Name'])\n(iv) StudentData[102]['Marks'][2] = 85 [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Find the output of the following Python program:\ndef Mystery(A, B):\n    for i in range(len(A)):\n        if A[i] in B:\n            A[i] = A[i] + '@'\n        else:\n            A[i] = A[i] + '#'\n\nWords = ['GO', 'IN', 'TO', 'ON']\nVowels = ['A', 'E', 'I', 'O', 'U']\nMystery(Words, Vowels)\nprint(Words)",
        "answer": "['GO#', 'IN#', 'TO#', 'ON#']",
        "explanation": "Marking Scheme:\n1. Analysis of the condition 'if A[i] in B' [2.5 Marks]:\nNotice that A[i] are strings of length 2 ('GO', 'IN', 'TO', 'ON').\nThe list B contains single character strings ['A', 'E', 'I', 'O', 'U'].\n- 'GO' in ['A', 'E', 'I', 'O', 'U'] -> False (membership in a list checks for exact element equality, not substring match!).\n- 'IN' in Vowels -> False.\n- 'TO' in Vowels -> False.\n- 'ON' in Vowels -> False.\n\n2. Modification of elements [2 Marks]:\nSince the 'if' condition is False for all 4 elements, the 'else' block executes every time:\nA[0] = 'GO' + '#' = 'GO#'\nA[1] = 'IN' + '#' = 'IN#'\nA[2] = 'TO' + '#' = 'TO#'\nA[3] = 'ON' + '#' = 'ON#'\n\n3. Final Output [0.5 Mark]:\n['GO#', 'IN#', 'TO#', 'ON#']"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Write a Python program to input a sentence and:\n(a) Find and display the longest word and its length.\n(b) Display the frequency of each word in the sentence using a dictionary.\n(c) Count the number of words starting with a vowel.",
        "answer": "Sentence word analysis program",
        "explanation": "Marking Scheme:\n1. Input and split sentence [1 Mark]:\nsentence = input(\"Enter a sentence: \")\nwords = sentence.split()\n\n2. Longest word logic [1.5 Marks]:\nlongest = \"\"\nfor w in words:\n    if len(w) > len(longest):\n        longest = w\nprint(\"Longest word:\", longest, \"with length:\", len(longest))\n\n3. Word frequency dictionary [1.5 Marks]:\nfreq = {}\nfor w in words:\n    w_clean = w.lower()\n    freq[w_clean] = freq.get(w_clean, 0) + 1\nprint(\"Word Frequencies:\", freq)\n\n4. Vowel-starting words count [1 Mark]:\nvowel_count = sum(1 for w in words if w[0].lower() in 'aeiou')\nprint(\"Words starting with vowel:\", vowel_count)"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "What possible output(s) are expected to be displayed on screen at the time of execution of the following code? Also specify the minimum and maximum values that can be assigned to the variable Pick:\nimport random\nColors = [\"RED\", \"GREEN\", \"BLUE\", \"YELLOW\"]\nPick = random.randint(1, 3)\nfor i in range(Pick, 4):\n    print(Colors[i], end=\"*\")",
        "answer": "Minimum value of Pick = 1, Maximum value of Pick = 3; Possible outputs: GREEN*BLUE*YELLOW*, BLUE*YELLOW*, or YELLOW*",
        "explanation": "Marking Scheme:\n1. Min and Max values of Pick [1.5 Marks]:\nrandom.randint(1, 3) generates random integers from 1 to 3 inclusive.\n- Minimum value of Pick = 1\n- Maximum value of Pick = 3\n\n2. Output possibilities for each value of Pick [2.5 Marks]:\n- Case 1: If Pick = 1: range(1, 4) executes for i = 1, 2, 3.\n  Colors[1] = GREEN, Colors[2] = BLUE, Colors[3] = YELLOW\n  Output: GREEN*BLUE*YELLOW*\n- Case 2: If Pick = 2: range(2, 4) executes for i = 2, 3.\n  Colors[2] = BLUE, Colors[3] = YELLOW\n  Output: BLUE*YELLOW*\n- Case 3: If Pick = 3: range(3, 4) executes for i = 3.\n  Colors[3] = YELLOW\n  Output: YELLOW*"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Write a Python program to perform matrix operations using nested lists:\n(a) Input two 3x3 matrices A and B.\n(b) Compute and display their sum matrix (A + B).\n(c) Find and display the transpose of matrix A.",
        "answer": "Matrix addition and transpose program using nested lists",
        "explanation": "Marking Scheme:\n1. Matrix Input [1 Mark]:\ndef input_matrix(name):\n    print(f\"Enter 3x3 matrix {name}:\")\n    mat = []\n    for i in range(3):\n        row = [int(x) for x in input(f\"Row {i+1} (3 space-separated ints): \").split()]\n        mat.append(row)\n    return mat\n\nA = input_matrix(\"A\")\nB = input_matrix(\"B\")\n\n2. Matrix Addition [2 Marks]:\nsum_matrix = [[A[i][j] + B[i][j] for j in range(3)] for i in range(3)]\nprint(\"Sum Matrix (A + B):\")\nfor row in sum_matrix:\n    print(row)\n\n3. Matrix Transpose [2 Marks]:\ntranspose_A = [[A[j][i] for j in range(3)] for i in range(3)]\nprint(\"Transpose of Matrix A:\")\nfor row in transpose_A:\n    print(row)"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write a Python function BubbleSort(L) to sort a list of numbers in ascending order using the Bubble Sort algorithm. Trace the passes for the list L = [35, 12, 48, 6, 21].",
        "answer": "Bubble sort implementation and pass-by-pass tracing",
        "explanation": "Marking Scheme:\n1. Python Function [2 Marks]:\ndef BubbleSort(L):\n    n = len(L)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if L[j] > L[j + 1]:\n                L[j], L[j + 1] = L[j + 1], L[j]\n\n2. Tracing Passes for [35, 12, 48, 6, 21] [2 Marks]:\n- Initial: [35, 12, 48, 6, 21]\n- Pass 1: Compare adjacent pairs -> [12, 35, 6, 21, 48] (48 placed at end)\n- Pass 2: Compare up to index 3 -> [12, 6, 21, 35, 48] (35 placed)\n- Pass 3: Compare up to index 2 -> [6, 12, 21, 35, 48] (21 placed)\n- Pass 4: Compare up to index 1 -> [6, 12, 21, 35, 48] (No swaps, sorted)"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is dynamic typing in Python? How does it differ from static typing?\n(b) Write a program to create a dictionary that maps each character of a string to its frequency, ignoring spaces.",
        "answer": "(a) Dynamic typing concept; (b) Character frequency dictionary program",
        "explanation": "Marking Scheme:\n(a) Dynamic Typing Concept (2 Marks):\n- In Python, data types of variables are determined automatically at runtime based on the value assigned, rather than explicitly declared before compilation (e.g. x = 10 makes x an int; then x = 'hello' makes x a str). [1 Mark]\n- In statically typed languages (C++, Java), variable types are fixed at compile time and cannot change. [1 Mark]\n\n(b) Character Frequency Program (3 Marks):\ntext = input(\"Enter a string: \")\nchar_freq = {}\nfor ch in text:\n    if ch != ' ':\n        char_freq[ch] = char_freq.get(ch, 0) + 1\n\nprint(\"Character frequencies:\")\nfor ch, count in char_freq.items():\n    print(f\"'{ch}': {count}\")"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "unit_num": 1,
      "title": "Functions and Exception Handling",
      "unit_title": "Unit I: Computational Thinking and Programming - 2",
      "weightage_unit": "40 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which keyword is used to modify a global variable inside a function in Python?",
        "answer": "(a) global",
        "explanation": "The 'global' keyword allows a programmer to modify a variable outside of the current local scope, binding the local identifier to the global variable.",
        "options": [
          "(a) global",
          "(b) nonlocal",
          "(c) def",
          "(d) extern"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the output of the following Python code?\ndef func(a, b = 5, c = 10):\n    return a + b + c\nprint(func(3, c = 20))",
        "answer": "(a) 28",
        "explanation": "a = 3 (positional), b takes its default value 5, and c is passed as keyword argument 20. Total = 3 + 5 + 20 = 28.",
        "options": [
          "(a) 28",
          "(b) 18",
          "(c) 35",
          "(d) Error"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following blocks in Python exception handling is ALWAYS executed, regardless of whether an exception occurred or not?",
        "answer": "(a) finally",
        "explanation": "The 'finally' block is always executed after the try and except blocks, regardless of whether an exception was raised, handled, or not raised. It is typically used for clean-up actions.",
        "options": [
          "(a) finally",
          "(b) except",
          "(c) try",
          "(d) else"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What type of value is returned by a Python function that does not contain a return statement?",
        "answer": "(a) None",
        "explanation": "In Python, if a function does not explicitly return a value, it implicitly returns the special singleton object 'None' of type NoneType.",
        "options": [
          "(a) None",
          "(b) 0",
          "(c) False",
          "(d) Null"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What will be the output of the following code?\ndef modify(L):\n    L.append(100)\n    L = [1, 2, 3]\n\nMyList = [10, 20]\nmodify(MyList)\nprint(MyList)",
        "answer": "(a) [10, 20, 100]",
        "explanation": "L.append(100) mutates the list MyList in place. The subsequent assignment 'L = [1, 2, 3]' rebinds local variable L to a new list object without altering MyList. Hence MyList is [10, 20, 100].",
        "options": [
          "(a) [10, 20, 100]",
          "(b) [1, 2, 3]",
          "(c) [10, 20]",
          "(d) [10, 20, 100, 1, 2, 3]"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a function definition, non-default arguments must be placed:",
        "answer": "(a) Before default arguments",
        "explanation": "In Python syntax, positional (non-default) arguments must precede all default arguments in the function parameter list. Otherwise, a SyntaxError occurs.",
        "options": [
          "(a) Before default arguments",
          "(b) After default arguments",
          "(c) Anywhere in the parameter list",
          "(d) In between default arguments"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following built-in exceptions is raised when an index of a list is outside its valid range?",
        "answer": "(a) IndexError",
        "explanation": "An IndexError is raised when attempting to access an index that is out of range in a sequence (such as a string, list, or tuple).",
        "options": [
          "(a) IndexError",
          "(b) KeyError",
          "(c) ValueError",
          "(d) TypeError"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What will be the output of the following code?\ndef calc(x, y):\n    return x + y, x - y, x * y\nres = calc(5, 2)\nprint(type(res))",
        "answer": "(a) <class 'tuple'>",
        "explanation": "When a Python function returns multiple comma-separated values, Python packs them into a single tuple object.",
        "options": [
          "(a) <class 'tuple'>",
          "(b) <class 'list'>",
          "(c) <class 'int'>",
          "(d) <class 'set'>"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "What will be the output of the following code?\nx = 10\ndef display():\n    x = 20\n    print(x, end=\" \")\ndisplay()\nprint(x)",
        "answer": "(a) 20 10",
        "explanation": "Inside display(), 'x = 20' creates a local variable x which shadows the global variable. It prints 20. Outside the function, the global variable x remains 10.",
        "options": [
          "(a) 20 10",
          "(b) 20 20",
          "(c) 10 10",
          "(d) 10 20"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which exception is raised when trying to divide any integer by zero in Python?",
        "answer": "(a) ZeroDivisionError",
        "explanation": "The division or modulo operation by zero in Python raises a built-in ZeroDivisionError (which is a subclass of ArithmeticError).",
        "options": [
          "(a) ZeroDivisionError",
          "(b) MathError",
          "(c) DivisionByZeroException",
          "(d) ArithmeticError only"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What will be the output of the following code?\ndef greet(name, msg=\"Good morning!\"):\n    print(\"Hello\", name + \", \" + msg)\ngreet(\"Ravi\", msg=\"How are you?\")",
        "answer": "(a) Hello Ravi, How are you?",
        "explanation": "The default argument 'Good morning!' is overridden by the explicitly passed keyword argument 'How are you?'. Output is 'Hello Ravi, How are you?'.",
        "options": [
          "(a) Hello Ravi, How are you?",
          "(b) Hello Ravi, Good morning!",
          "(c) TypeError",
          "(d) Hello Ravi"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Consider the following code:\ntry:\n    a = int(\"Python\")\nexcept ValueError:\n    print(\"Caught ValueError\")\nelse:\n    print(\"No error\")",
        "answer": "(a) Caught ValueError",
        "explanation": "int(\"Python\") cannot convert non-numeric string to integer and raises a ValueError. The except block catches it and prints 'Caught ValueError'. The 'else' block executes only if NO exception occurs.",
        "options": [
          "(a) Caught ValueError",
          "(b) No error",
          "(c) ValueError uncaught",
          "(d) Both messages"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The actual values passed into a function during a function call are called:",
        "answer": "(a) Arguments",
        "explanation": "The values passed to a function at the point of calling are called arguments (or actual parameters), whereas variables declared in the function header are called parameters (or formal parameters).",
        "options": [
          "(a) Arguments",
          "(b) Parameters",
          "(c) Variables",
          "(d) Literals"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is the output of the following code?\ndef check(a, b):\n    return a if a > b else b\nprint(check(15, 25))",
        "answer": "(a) 25",
        "explanation": "The ternary conditional expression 'a if a > b else b' returns a if a > b is True, otherwise b. Since 15 > 25 is False, it returns 25.",
        "options": [
          "(a) 25",
          "(b) 15",
          "(c) True",
          "(d) None"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What will be the output of the following code?\ndef Power(b, p=2):\n    return b ** p\nprint(Power(3) + Power(2, 3))",
        "answer": "(a) 17",
        "explanation": "Power(3) uses default p = 2 => 3² = 9.\nPower(2, 3) passes p = 3 => 2³ = 8.\nTotal = 9 + 8 = 17.",
        "options": [
          "(a) 17",
          "(b) 15",
          "(c) 14",
          "(d) 11"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which statement is used to explicitly trigger an exception in Python?",
        "answer": "(a) raise",
        "explanation": "The 'raise' statement allows the programmer to manually throw an exception in Python.",
        "options": [
          "(a) raise",
          "(b) throw",
          "(c) except",
          "(d) error"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the output of the following code?\ndef Test(x):\n    x = x + 10\n    return x\na = 5\nTest(a)\nprint(a)",
        "answer": "(a) 5",
        "explanation": "Integers are immutable in Python. Passing 'a' passes its value/reference, but 'x = x + 10' reassigns local variable x. Since the returned value is not assigned back to a, variable 'a' remains 5.",
        "options": [
          "(a) 5",
          "(b) 15",
          "(c) 10",
          "(d) None"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What is the output of the following code?\ntry:\n    f = 10 / 2\nexcept ZeroDivisionError:\n    print(\"Error\")\nelse:\n    print(\"Success\")\nfinally:\n    print(\"End\")",
        "answer": "(a) Success \\n End",
        "explanation": "10 / 2 evaluates to 5.0 without raising an error. The 'else' block executes and prints 'Success'. Then the 'finally' block executes and prints 'End'.",
        "options": [
          "(a) Success \\n End",
          "(b) Error \\n End",
          "(c) Success",
          "(d) End"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What will be the output of the following code?\ndef Add(x, y):\n    print(x + y)\nres = Add(10, 20)\nprint(res)",
        "answer": "(a) 30 \\n None",
        "explanation": "Add(10, 20) executes print(10 + 20) which prints 30. Since Add has no return statement, it returns None. Then print(res) prints None.",
        "options": [
          "(a) 30 \\n None",
          "(b) 30 \\n 30",
          "(c) 30",
          "(d) None \\n 30"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A function that calls itself is called a:",
        "answer": "(a) Recursive function",
        "explanation": "A function that calls itself directly or indirectly in its definition is known as a recursive function.",
        "options": [
          "(a) Recursive function",
          "(b) Built-in function",
          "(c) Anonymous function",
          "(d) Higher-order function"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the output of the following code?\ndef Change(val):\n    val['score'] += 5\nplayer = {'name': 'Arun', 'score': 90}\nChange(player)\nprint(player['score'])",
        "answer": "(a) 95",
        "explanation": "Dictionaries are mutable. Passing 'player' to Change(val) passes a reference to the same dictionary. Modifying val['score'] directly updates player's score to 95.",
        "options": [
          "(a) 95",
          "(b) 90",
          "(c) KeyError",
          "(d) None"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which module in Python contains mathematical functions like sqrt(), ceil(), and floor()?",
        "answer": "(a) math",
        "explanation": "The 'math' module provides access to mathematical functions including sqrt, ceil, floor, sin, cos, and constants like pi and e.",
        "options": [
          "(a) math",
          "(b) random",
          "(c) sys",
          "(d) os"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the output of the following code?\ndef fun(a, b):\n    return a * 2, b * 3\nx, y = fun(3, 4)\nprint(x, y)",
        "answer": "(a) 6 12",
        "explanation": "fun(3, 4) returns tuple (6, 12). Unpacking tuple: x = 6, y = 12. print(x, y) prints '6 12'.",
        "options": [
          "(a) 6 12",
          "(b) (6, 12)",
          "(c) 6, 12",
          "(d) 9 8"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following causes a TypeError in Python?",
        "answer": "(a) '2' + 2",
        "explanation": "'2' + 2 attempts to concatenate a string and an integer using '+', which raises a TypeError. int('abc') raises ValueError; 10/0 raises ZeroDivisionError; [1,2][5] raises IndexError.",
        "options": [
          "(a) '2' + 2",
          "(b) int('abc')",
          "(c) 10 / 0",
          "(d) [1, 2][5]"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What will be the output of the following code?\ndef show(s):\n    s = s.upper()\n    return s\nmsg = \"cbse\"\nshow(msg)\nprint(msg)",
        "answer": "(a) cbse",
        "explanation": "Strings are immutable. show(msg) returns 'CBSE', but the caller does not assign the result back to msg. Variable msg remains 'cbse'.",
        "options": [
          "(a) cbse",
          "(b) CBSE",
          "(c) None",
          "(d) Error"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Positional arguments in a Python function call must match the order of parameters defined in the function header.\nReason (R): Keyword arguments allow arguments to be passed in any order by explicitly naming the parameters.",
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both statements are true. Positional arguments are bound by position, while keyword arguments are bound by name. However, R is a contrasting feature, not the explanation for positional binding.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Changes made to a mutable parameter inside a function are reflected in the calling environment.\nReason (R): When a mutable object (like a list) is passed to a function, the function receives a reference to the original object.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains Python's 'pass-by-object-reference' model for mutable data structures.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): A variable declared inside a function can be accessed anywhere in the program.\nReason (R): Variables defined inside a function have local scope by default.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because local variables can only be accessed within the function where they are created. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The 'else' block in exception handling executes only when no exception occurs in the 'try' block.\nReason (R): The 'finally' block executes regardless of whether an exception is raised or not.",
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both statements are correct definitions of the 'else' and 'finally' clauses in Python exception handling, but R describes 'finally' and does not explain why 'else' runs on successful try blocks.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): A function header 'def calc(a=10, b):' is valid in Python.\nReason (R): Default arguments must always follow non-default arguments in the parameter list.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE: 'def calc(a=10, b):' raises a SyntaxError (non-default argument follows default argument). Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Differentiate between formal parameters and actual parameters in a Python function with an example.",
        "answer": "Formal parameters vs Actual parameters",
        "explanation": "1. Definitions [1 Mark]:\n- Formal Parameters: The variables listed inside the parentheses in the function definition header that receive values when the function is called.\n- Actual Parameters (Arguments): The actual values or variables passed into the function call.\n2. Example [1 Mark]:\ndef add(x, y):    # x, y are Formal Parameters\n    return x + y\n\na, b = 5, 10\nres = add(a, b)   # a, b are Actual Parameters"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find the output of the following Python program:\ndef Calc(A, B):\n    A = A + 5\n    B = B - 5\n    print(A, B)\n    return A * B\n\nX, Y = 10, 20\nZ = Calc(X, Y)\nprint(X, Y, Z)",
        "answer": "15 15 \\n 10 20 225",
        "explanation": "Inside Calc(10, 20) [1 Mark]:\n- A = 10 + 5 = 15\n- B = 20 - 5 = 15\n- print(A, B) outputs: 15 15\n- returns 15 * 15 = 225 => Z = 225.\nIn main program [1 Mark]:\n- Since integers X and Y are immutable, their values remain 10 and 20.\n- print(X, Y, Z) outputs: 10 20 225."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "What is the purpose of the 'global' statement in Python? Explain with the help of a suitable code example.",
        "answer": "Purpose and demonstration of global statement",
        "explanation": "1. Explanation [1.5 Marks]:\nIn Python, variables declared outside all functions are global. Inside a function, a global variable can be read, but assigning to it creates a local variable of the same name unless explicitly declared with the 'global' keyword. 'global var_name' tells Python that the identifier refers to the global scope variable.\n2. Example [1.5 Marks]:\ncount = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)  # Outputs: 1 (global variable updated)"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Write a Python function CountVowels(s) that takes a string s as argument and returns the count of vowels in it.",
        "answer": "CountVowels function code",
        "explanation": "Marking Scheme:\ndef CountVowels(s):              # [0.5 Mark] header\n    count = 0\n    vowels = \"aeiouAEIOU\"\n    for ch in s:                 # [0.5 Mark] loop\n        if ch in vowels:         # [0.5 Mark] condition\n            count += 1\n    return count                 # [0.5 Mark] return value"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Find the output of the following code:\ndef Interest(p, r=0.05, t=2):\n    return p * r * t\n\nprint(Interest(1000))\nprint(Interest(500, t=3))\nprint(Interest(2000, 0.1, 1))",
        "answer": "100.0 \\n 75.0 \\n 200.0",
        "explanation": "1. Interest(1000): p = 1000, r = 0.05, t = 2 -> 1000 * 0.05 * 2 = 100.0 [1 Mark]\n2. Interest(500, t=3): p = 500, r = 0.05, t = 3 -> 500 * 0.05 * 3 = 75.0 [1 Mark]\n3. Interest(2000, 0.1, 1): p = 2000, r = 0.1, t = 1 -> 2000 * 0.1 * 1 = 200.0 [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Explain the role of try-except blocks in Python exception handling with an example.",
        "answer": "Role and example of try-except blocks",
        "explanation": "1. Explanation [1 Mark]:\n- 'try' block contains code that might raise an exception.\n- 'except' block contains code that handles the exception gracefully without terminating the program abnormally.\n2. Example [1 Mark]:\ntry:\n    num = int(input(\"Enter integer: \"))\n    print(\"10 / num =\", 10 / num)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nexcept ValueError:\n    print(\"Invalid input! Please enter an integer.\")"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write a Python function SwapList(L) which swaps the elements at even and odd positions in a list L of even length. For example, if L = [10, 20, 30, 40], it should become [20, 10, 40, 30].",
        "answer": "SwapList function code",
        "explanation": "Marking Scheme:\ndef SwapList(L):                     # [0.5 Mark] header\n    for i in range(0, len(L), 2):    # [1 Mark] step of 2\n        L[i], L[i+1] = L[i+1], L[i]  # [1 Mark] swap statement\n    return L                         # [0.5 Mark] return"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is the difference between default arguments and keyword arguments in Python functions?",
        "answer": "Default vs Keyword arguments",
        "explanation": "1. Default Arguments [1 Mark]: Defined in the function header; they assign default values to parameters if the caller does not pass them.\n2. Keyword Arguments [1 Mark]: Used at the function call site; arguments are passed with their parameter names (e.g. func(b=10, a=5)), allowing arbitrary ordering."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Find the output of the following code:\na = 100\ndef show():\n    global a\n    a = 200\n    print(\"In show:\", a)\n\nprint(\"Before:\", a)\nshow()\nprint(\"After:\", a)",
        "answer": "Before: 100 \\n In show: 200 \\n After: 200",
        "explanation": "1. print(\"Before:\", a) prints 'Before: 100'. [1 Mark]\n2. show() declares global a and reassigns a to 200, then prints 'In show: 200'. [1 Mark]\n3. print(\"After:\", a) references the modified global variable, printing 'After: 200'. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "State the difference between syntax errors and runtime exceptions in Python.",
        "answer": "Syntax errors vs Runtime exceptions",
        "explanation": "1. Syntax Errors [1 Mark]: Occur during parsing when the code violates Python grammar rules (e.g. missing colon, mismatched parentheses). The program will not run at all.\n2. Runtime Exceptions [1 Mark]: Occur during program execution when syntactically correct code encounters an illegal operation (e.g. dividing by zero, file not found)."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Explain the LEGB rule for variable scope resolution in Python.\n(b) Find the output of the following program:\nx = 50\ndef func1():\n    x = 25\n    def func2():\n        x = 10\n        print(\"func2:\", x)\n    func2()\n    print(\"func1:\", x)\nfunc1()\nprint(\"global:\", x)",
        "answer": "(a) LEGB rule explanation; (b) func2: 10 \\n func1: 25 \\n global: 50",
        "explanation": "Marking Scheme:\n(a) LEGB Rule Explanation (2.5 Marks):\nPython resolves names using the LEGB hierarchy (Local -> Enclosing -> Global -> Built-in):\n1. Local (L): Names assigned inside a function (not declared global).\n2. Enclosing (E): Names in the local scope of any enclosing functions (e.g. inner function finding outer function variables).\n3. Global (G): Names assigned at the top-level of a module or declared global.\n4. Built-in (B): Built-in module names (print, len, range, int).\n\n(b) Output Tracing (2.5 Marks):\n- Inside func2(), x is local: prints 'func2: 10'. [1 Mark]\n- Inside func1(), x is local to func1: prints 'func1: 25'. [1 Mark]\n- In the main program, global x is 50: prints 'global: 50'. [0.5 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Write a Python program that defines the following user-defined functions to perform bank account transactions:\n(a) Deposit(balance, amount): adds amount to balance and returns updated balance.\n(b) Withdraw(balance, amount): checks if balance is sufficient (maintaining a minimum balance of ₹1,000). If sufficient, deducts amount and returns updated balance; otherwise raises a custom or built-in ValueError with message 'Insufficient Balance'.\n(c) Main menu-driven loop to test the functions with exception handling.",
        "answer": "Bank transaction program with custom exception handling",
        "explanation": "Marking Scheme:\n1. Deposit function [1 Mark]:\ndef Deposit(balance, amount):\n    if amount <= 0:\n        raise ValueError(\"Deposit amount must be positive.\")\n    return balance + amount\n\n2. Withdraw function with minimum balance rule [2 Marks]:\ndef Withdraw(balance, amount):\n    if amount <= 0:\n        raise ValueError(\"Withdrawal amount must be positive.\")\n    if balance - amount < 1000:\n        raise ValueError(\"Insufficient Balance! Minimum ₹1000 required.\")\n    return balance - amount\n\n3. Main program with try-except [2 Marks]:\ndef main():\n    balance = 5000\n    try:\n        print(\"Initial Balance:\", balance)\n        balance = Deposit(balance, 2000)\n        print(\"After Deposit:\", balance)\n        balance = Withdraw(balance, 5500)\n        print(\"After Withdrawal:\", balance)\n        balance = Withdraw(balance, 1000)  # Should trigger exception\n    except ValueError as e:\n        print(\"Transaction Failed:\", e)\n    finally:\n        print(\"Final Balance Recorded:\", balance)\n\nmain()"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Trace the execution and find the exact output of the following Python code:\ndef Fun(L, n):\n    for i in range(len(L)):\n        if L[i] % 2 == 0:\n            L[i] = L[i] + n\n        else:\n            L[i] = L[i] - n\n\nData = [12, 17, 24, 33, 40]\nFun(Data, 5)\nfor val in Data:\n    print(val, end=\"$\")\nprint()\nFun(Data, 2)\nfor val in Data:\n    print(val, end=\"#\")",
        "answer": "17$12$29$28$45$\\n15#14#27#30#43#",
        "explanation": "Marking Scheme:\n1. First call Fun(Data, 5) [2.5 Marks]:\n- L[0]=12 (even) -> 12 + 5 = 17\n- L[1]=17 (odd) -> 17 - 5 = 12\n- L[2]=24 (even) -> 24 + 5 = 29\n- L[3]=33 (odd) -> 33 - 5 = 28\n- L[4]=40 (even) -> 40 + 5 = 45\nLoop prints: 17$12$29$28$45$\n\n2. Second call Fun(Data, 2) on [17, 12, 29, 28, 45] [2.5 Marks]:\n- L[0]=17 (odd) -> 17 - 2 = 15\n- L[1]=12 (even) -> 12 + 2 = 14\n- L[2]=29 (odd) -> 29 - 2 = 27\n- L[3]=28 (even) -> 28 + 2 = 30\n- L[4]=45 (odd) -> 45 - 2 = 43\nLoop prints: 15#14#27#30#43#"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: Modular Payroll Processing System\nA software developer is designing a payroll processing module in Python. The system defines the following:\n- A global variable BasicPay = 25000\n- A function CalcAllowances(basic, da_pct=40, hra_pct=20) that calculates Dearness Allowance (DA) and House Rent Allowance (HRA) and returns both.\n- A function CalcGrossSalary(basic, da, hra) that returns gross salary.\n(i) What will CalcAllowances(BasicPay) return when called with default percentages?\n(ii) Write code to call CalcAllowances with DA = 45% and default HRA.\n(iii) Write the complete definition of CalcGrossSalary.\n(iv) If a programmer writes 'BasicPay += 5000' inside CalcGrossSalary without using 'global', what error occurs and why?",
        "answer": "Solutions to Payroll Processing Case Study",
        "explanation": "(i) DA = 25000 * 0.40 = 10000; HRA = 25000 * 0.20 = 5000. Returns tuple (10000, 5000). [1 Mark]\n(ii) CalcAllowances(BasicPay, da_pct=45) (or CalcAllowances(BasicPay, 45)). [1 Mark]\n(iii) Definition [1 Mark]:\ndef CalcGrossSalary(basic, da, hra):\n    return basic + da + hra\n(iv) UnboundLocalError occurs because Python treats BasicPay as a local variable due to the assignment (+=), but it is referenced before being assigned locally. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Write a Python function PrimeList(start, end) that takes two positive integers start and end as arguments, finds all prime numbers between start and end (both inclusive), and returns them as a list. Also write code to call this function and display the count of primes found.",
        "answer": "PrimeList function implementation",
        "explanation": "Marking Scheme:\n1. Function Header and Prime Check [2.5 Marks]:\ndef is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\n2. PrimeList Function [1.5 Marks]:\ndef PrimeList(start, end):\n    primes = []\n    for num in range(start, end + 1):\n        if is_prime(num):\n            primes.append(num)\n    return primes\n\n3. Function Call and Result [1 Mark]:\ns = int(input(\"Enter start: \"))\ne = int(input(\"Enter end: \"))\nresult = PrimeList(s, e)\nprint(\"Primes found:\", result)\nprint(\"Total count:\", len(result))"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Find the output of the following Python program:\ndef Mystery(L):\n    for i in range(len(L)):\n        if i % 2 == 0:\n            L[i] = L[i] * 2\n        else:\n            L[i] = L[i] + 10\n\ndef Show(T):\n    L = list(T)\n    Mystery(L)\n    return tuple(L)\n\nTup = (5, 8, 12, 15, 20)\nTup = Show(Tup)\nprint(Tup)",
        "answer": "(10, 18, 24, 25, 40)",
        "explanation": "Marking Scheme:\n1. Conversion to list L = [5, 8, 12, 15, 20] [0.5 Mark]\n2. Trace Mystery(L) [3 Marks]:\n- i = 0 (even): L[0] = 5 * 2 = 10\n- i = 1 (odd): L[1] = 8 + 10 = 18\n- i = 2 (even): L[2] = 12 * 2 = 24\n- i = 3 (odd): L[3] = 15 + 10 = 25\n- i = 4 (even): L[4] = 20 * 2 = 40\nList becomes: [10, 18, 24, 25, 40].\n3. Conversion back to tuple and print [1.5 Marks]:\nReturns tuple (10, 18, 24, 25, 40).\nprint(Tup) outputs: (10, 18, 24, 25, 40)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Write a Python function ShiftLeft(L) that shifts all elements of list L one position to the left, moving the first element to the last position. For example, if L = [10, 20, 30, 40], it should become [20, 30, 40, 10]. Do not use another list.",
        "answer": "In-place left shift function",
        "explanation": "Marking Scheme:\n1. Function Header and Store First Element [1.5 Marks]:\ndef ShiftLeft(L):\n    if len(L) <= 1:\n        return\n    first = L[0]\n\n2. Shift Loop [1.5 Marks]:\n    for i in range(len(L) - 1):\n        L[i] = L[i + 1]\n    L[-1] = first\n\n3. Function demonstration [1 Mark]:\nMyList = [10, 20, 30, 40]\nShiftLeft(MyList)\nprint(MyList)  # Outputs: [20, 30, 40, 10]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is the difference between a module and a package in Python?\n(b) Write a program with a function Divide(a, b) that catches ZeroDivisionError and ValueError when reading user inputs, and prints appropriate error messages using try-except-finally blocks.",
        "answer": "(a) Module vs Package; (b) Robust division program with exception handling",
        "explanation": "Marking Scheme:\n(a) Module vs Package (2 Marks):\n- Module: A single Python file (.py) containing functions, classes, and variables intended for reuse (e.g. math.py, random.py). [1 Mark]\n- Package: A directory of Python modules containing a special __init__.py file that allows modules to be organized hierarchically. [1 Mark]\n\n(b) Exception Handling Program (3 Marks):\ndef Divide():\n    try:\n        x = float(input(\"Enter numerator: \"))\n        y = float(input(\"Enter denominator: \"))\n        res = x / y\n        print(\"Result:\", res)\n    except ZeroDivisionError:\n        print(\"Error: Denominator cannot be zero.\")\n    except ValueError:\n        print(\"Error: Please enter valid numeric values.\")\n    finally:\n        print(\"Execution of Divide() completed.\")\n\nDivide()"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write a Python function CapitalizeWords(sentence) that takes a sentence as input and returns a new sentence where the first letter of every word is converted to uppercase and remaining letters to lowercase without using the built-in title() method.",
        "answer": "CapitalizeWords function implementation",
        "explanation": "Marking Scheme:\n1. Function header and split [1 Mark]:\ndef CapitalizeWords(sentence):\n    words = sentence.split()\n    new_words = []\n\n2. Capitalize each word logic [2 Marks]:\n    for w in words:\n        if len(w) > 0:\n            cap_w = w[0].upper() + w[1:].lower()\n            new_words.append(cap_w)\n\n3. Reassemble and return [1 Mark]:\n    return ' '.join(new_words)\n\n# Example:\nprint(CapitalizeWords(\"cOMpuTer sCIEnce wITH pyTHOn\"))\n# Outputs: \"Computer Science With Python\""
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Explain the difference between pass-by-value and pass-by-reference. How does Python implement parameter passing?\n(b) Find the output of the following code:\ndef Modify(x, L=[]):\n    L.append(x)\n    return L\nprint(Modify(1))\nprint(Modify(2))\nprint(Modify(3, []))",
        "answer": "(a) Parameter passing model; (b) [1] \\n [1, 2] \\n [3]",
        "explanation": "Marking Scheme:\n(a) Parameter Passing in Python (2.5 Marks):\n- In Python, parameter passing is 'Pass-by-Object-Reference' (or 'Call-by-Sharing'). [1 Mark]\n- If an immutable object (int, float, str, tuple) is passed, modifying it inside the function rebinds the local name to a new object, leaving the caller's value unchanged (simulating pass-by-value). [0.75 Mark]\n- If a mutable object (list, dict, set) is passed, in-place modifications (append, update) affect the caller's original object directly (simulating pass-by-reference). [0.75 Mark]\n\n(b) Output Tracing of Default Mutable Argument (2.5 Marks):\nDefault argument L=[] is created ONCE when the function is defined, NOT each time it is called!\n1. Modify(1): appends 1 to default L -> returns [1]. [1 Mark]\n2. Modify(2): appends 2 to the same default L -> returns [1, 2]. [1 Mark]\n3. Modify(3, []): explicitly passes a new empty list [] -> returns [3]. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "unit_num": 1,
      "title": "File Handling - Text Files",
      "unit_title": "Unit I: Computational Thinking and Programming - 2",
      "weightage_unit": "40 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following file modes in Python opens a text file for reading and writing without truncating the file?",
        "answer": "(a) 'r+'",
        "explanation": "'r+' opens the file for both reading and writing. The file pointer is placed at the beginning, and existing content is NOT truncated. 'w+' truncates the file.",
        "options": [
          "(a) 'r+'",
          "(b) 'w+'",
          "(c) 'a+'",
          "(d) 'w'"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the return type of the readlines() method of a file object?",
        "answer": "(a) list of strings",
        "explanation": "readlines() reads all lines from the file and returns them as a list of strings, where each string represents a line ending with '\\n'.",
        "options": [
          "(a) list of strings",
          "(b) str",
          "(c) tuple",
          "(d) dict"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which method returns the current byte position of the file pointer within a file?",
        "answer": "(a) tell()",
        "explanation": "The file method tell() returns an integer representing the current byte position of the file read/write pointer.",
        "options": [
          "(a) tell()",
          "(b) seek()",
          "(c) pos()",
          "(d) locate()"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What happens if you open a non-existent file in 'w' mode?",
        "answer": "(a) A new file is created",
        "explanation": "Opening a file in write mode ('w') creates a new empty file if the file does not already exist. If it exists, it truncates (clears) it.",
        "options": [
          "(a) A new file is created",
          "(b) FileNotFoundError is raised",
          "(c) IOError is raised",
          "(d) Program hangs"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which parameter value of seek(offset, whence) indicates that the offset is calculated from the end of the file?",
        "answer": "(a) 2",
        "explanation": "In seek(offset, whence): whence = 0 means from the beginning, whence = 1 means from current position, and whence = 2 means from the end of the file.",
        "options": [
          "(a) 2",
          "(b) 0",
          "(c) 1",
          "(d) -1"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Consider the file \"poem.txt\" containing:\nTwinkle twinkle little star\nHow I wonder what you are\nWhat will f.readline() return after executing f.readline() once?",
        "answer": "(c) 'How I wonder what you are\\n'",
        "explanation": "The first call to f.readline() reads line 1 ('Twinkle twinkle little star\\n'). The second call reads line 2: 'How I wonder what you are\\n'.",
        "options": [
          "(a) 'How I wonder what you are'",
          "(b) 'Twinkle twinkle little star\\n'",
          "(c) 'How I wonder what you are\\n'",
          "(d) ['Twinkle', 'star']"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "What is the primary advantage of opening a file using the 'with' statement in Python?",
        "answer": "(a) It automatically closes the file even if exceptions occur",
        "explanation": "The 'with' statement serves as a context manager that guarantees proper closing of file streams automatically upon exiting the block, even if an unhandled exception is raised.",
        "options": [
          "(a) It automatically closes the file even if exceptions occur",
          "(b) It makes file reading faster",
          "(c) It allows opening binary files only",
          "(d) It prevents file encryption"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following functions does NOT automatically add a newline character ('\\n') when writing to a file?",
        "answer": "(a) Both write() and writelines()",
        "explanation": "Neither f.write() nor f.writelines() appends a newline character automatically; the programmer must explicitly include '\\n' in the strings.",
        "options": [
          "(a) Both write() and writelines()",
          "(b) write() only",
          "(c) writelines() only",
          "(d) print() with file argument"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If file pointer is at position 10 in a text file, which statement moves it 5 bytes forward from the beginning?",
        "answer": "(a) f.seek(5, 0)",
        "explanation": "f.seek(5, 0) (or f.seek(5)) positions the file pointer exactly 5 bytes from the beginning (whence = 0).",
        "options": [
          "(a) f.seek(5, 0)",
          "(b) f.seek(5, 1)",
          "(c) f.seek(5, 2)",
          "(d) f.tell(5)"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What error is raised when trying to open a non-existent file in 'r' mode?",
        "answer": "(a) FileNotFoundError",
        "explanation": "Attempting to open a file in read mode ('r') when the file does not exist on disk raises a FileNotFoundError (which is a subclass of OSError).",
        "options": [
          "(a) FileNotFoundError",
          "(b) IOError",
          "(c) FileExistsError",
          "(d) EOFError"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What will be the output of len(f.read().split()) on a file containing \"CBSE Class 12 CS\"?",
        "answer": "(a) 4",
        "explanation": "f.read() returns 'CBSE Class 12 CS'. The split() method splits by whitespace into ['CBSE', 'Class', '12', 'CS']. The length of this list is 4.",
        "options": [
          "(a) 4",
          "(b) 17",
          "(c) 1",
          "(d) 3"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which mode should be used to append data to an existing text file without overwriting it?",
        "answer": "(a) 'a'",
        "explanation": "Append mode ('a') opens a file for writing, placing the file pointer at the very end. Existing content is preserved.",
        "options": [
          "(a) 'a'",
          "(b) 'w'",
          "(c) 'r'",
          "(d) 'r+'"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What will f.read(5) do when called on an open text file?",
        "answer": "(a) Reads the first 5 characters from the current pointer position",
        "explanation": "When an integer argument n is passed to read(n) in text mode, it reads at most n characters from the file starting at the current pointer location.",
        "options": [
          "(a) Reads the first 5 characters from the current pointer position",
          "(b) Reads the first 5 lines",
          "(c) Reads 5 words",
          "(d) Moves the pointer 5 bytes back"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "To read a file line-by-line using a memory-efficient loop in Python, which construct is preferred?",
        "answer": "(a) for line in f:",
        "explanation": "'for line in f:' iterates over the file object directly, loading one line into memory at a time. f.readlines() loads the entire file into memory as a list at once.",
        "options": [
          "(a) for line in f:",
          "(b) for line in f.readlines():",
          "(c) for line in f.read():",
          "(d) while f.readline() != '':"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What does f.flush() do in Python file handling?",
        "answer": "(a) Clears the internal buffer and writes data to disk immediately",
        "explanation": "The flush() method forces the write buffer to be flushed out to the disk without closing the file stream.",
        "options": [
          "(a) Clears the internal buffer and writes data to disk immediately",
          "(b) Closes the file",
          "(c) Deletes the file content",
          "(d) Resets the file pointer to 0"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "What does the following statement do?\nf = open('data.txt')",
        "answer": "(a) Opens data.txt in read ('r') text mode by default",
        "explanation": "In Python's open() function, the default mode is 'r' (read text mode). If mode is omitted, 'r' is assumed.",
        "options": [
          "(a) Opens data.txt in read ('r') text mode by default",
          "(b) Opens data.txt in write mode",
          "(c) Opens data.txt in binary mode",
          "(d) Raises an error because mode is omitted"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is returned by f.readline() when the end of the file (EOF) is reached?",
        "answer": "(a) An empty string ''",
        "explanation": "When readline() reaches the end of the file, it returns an empty string (''). A blank line within a file returns '\\n'.",
        "options": [
          "(a) An empty string ''",
          "(b) None",
          "(c) '\\n'",
          "(d) EOFError"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following is NOT a valid file open mode in Python?",
        "answer": "(a) 'rw'",
        "explanation": "'rw' is not a valid mode string in Python. The combined read/write modes are 'r+', 'w+', and 'a+'.",
        "options": [
          "(a) 'rw'",
          "(b) 'r+'",
          "(c) 'w+'",
          "(d) 'a+'"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What is the default encoding used by Python 3 when reading text files on modern platforms?",
        "answer": "(a) UTF-8 (platform dependent)",
        "explanation": "Python 3 uses standard Unicode encodings (typically UTF-8 by default on Linux/macOS or platform locale encoding) to encode and decode text files.",
        "options": [
          "(a) UTF-8 (platform dependent)",
          "(b) ASCII",
          "(c) UTF-16",
          "(d) Latin-1"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "To write a list of strings L = [\"Line 1\\n\", \"Line 2\\n\"] to a file f, which method is used?",
        "answer": "(a) f.writelines(L)",
        "explanation": "f.writelines(sequence) writes a sequence of strings to a text file. f.write() accepts only a single string.",
        "options": [
          "(a) f.writelines(L)",
          "(b) f.write(L)",
          "(c) f.writelist(L)",
          "(d) f.dump(L)"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What will be the position of the file pointer immediately after opening an existing file in 'a' mode?",
        "answer": "(a) At the end of the file",
        "explanation": "In append mode ('a'), the file pointer is automatically placed at the end of the file so that subsequent writes append to existing content.",
        "options": [
          "(a) At the end of the file",
          "(b) At the beginning of the file",
          "(c) Undefined",
          "(d) At byte position 1"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "If a file contains 5 lines, what will be the length of the list returned by f.readlines()?",
        "answer": "(a) 5",
        "explanation": "f.readlines() creates a list containing each individual line as an element, so for 5 lines, len(f.readlines()) = 5.",
        "options": [
          "(a) 5",
          "(b) 1",
          "(c) Number of words",
          "(d) Number of characters"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What will be the output of the following code if 'notes.txt' contains 'HELLO WORLD'?\nwith open('notes.txt') as f:\n    f.seek(6)\n    print(f.read(5))",
        "answer": "(a) WORLD",
        "explanation": "f.seek(6) moves the pointer to index 6 (skipping 'HELLO ' which has 6 chars: indices 0 to 5). f.read(5) reads the next 5 characters: 'WORLD'.",
        "options": [
          "(a) WORLD",
          "(b) HELLO",
          "(c) ORLD",
          "(d) O WORLD"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following creates a new file if it does not exist, and clears the file if it already exists?",
        "answer": "(a) 'w'",
        "explanation": "'w' mode creates a new file if not present, and truncates (clears) existing contents if the file already exists.",
        "options": [
          "(a) 'w'",
          "(b) 'r'",
          "(c) 'a'",
          "(d) 'r+'"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "To strip leading and trailing whitespace and newline characters from a line read from a file, which method is used?",
        "answer": "(a) line.strip()",
        "explanation": "The strip() method removes all leading and trailing whitespace characters, including spaces, tabs, and newline ('\\n') characters.",
        "options": [
          "(a) line.strip()",
          "(b) line.clean()",
          "(c) line.remove()",
          "(d) line.split()"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Opening a file in 'w' mode deletes all its existing data.\nReason (R): The 'w' mode truncates the file to zero bytes if it already exists.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R provides the exact system mechanism (file truncation) that causes existing data deletion.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The method f.readlines() is more memory efficient than iterating over 'f' directly for very large files.\nReason (R): f.readlines() loads the entire file into memory as a list of strings.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE: Loading the entire file at once into memory causes heavy memory consumption for large files. Iterating directly ('for line in f:') is much more memory efficient. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): It is recommended to use the 'with open(...)' syntax for file operations in Python.\nReason (R): The 'with' statement ensures that files are closed automatically even if an exception occurs.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R gives the primary reason why 'with' context manager is recommended.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The tell() method takes one integer argument to move the file pointer.\nReason (R): The seek() method is used to reposition the file pointer, while tell() returns the current position.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because tell() takes no arguments; it simply returns the current byte position. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The writelines() method does not add newline characters between strings automatically.\nReason (R): If newlines are needed between elements, the programmer must explicitly append '\\n' to each string.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains how writelines() behaves in practice.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Differentiate between 'w' and 'a' file opening modes in Python.",
        "answer": "Write ('w') vs Append ('a') modes",
        "explanation": "1. Write mode ('w') [1 Mark]: Opens file for writing. If file exists, it overwrites (truncates) all existing content to zero bytes. If file does not exist, a new file is created.\n2. Append mode ('a') [1 Mark]: Opens file for writing, but positions the file pointer at the end of the file. Existing data is retained, and new data is added at the end. Creates a new file if it doesn't exist."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Write a Python function CountWords() that reads a text file \"Story.txt\" and counts the total number of words in it.",
        "answer": "CountWords function implementation",
        "explanation": "Marking Scheme:\ndef CountWords():\n    with open(\"Story.txt\", \"r\") as f:     # [0.5 Mark] open file\n        content = f.read()                 # [0.5 Mark] read content\n        words = content.split()            # [0.5 Mark] split into words\n        print(\"Total words:\", len(words))  # [0.5 Mark] print length"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Write a function CountLines() in Python to read a text file \"Poem.txt\" and display:\n(i) Total number of lines.\n(ii) Number of lines starting with the letter 'T' or 't'.",
        "answer": "CountLines function implementation",
        "explanation": "Marking Scheme:\ndef CountLines():\n    total_lines = 0\n    t_lines = 0\n    with open(\"Poem.txt\", \"r\") as f:     # [0.5 Mark]\n        for line in f:                     # [0.5 Mark]\n            total_lines += 1               # [0.5 Mark]\n            if line.strip().startswith(('T', 't')):  # [1 Mark]\n                t_lines += 1\n    print(\"Total lines:\", total_lines)     # [0.25 Mark]\n    print(\"Lines starting with T/t:\", t_lines) # [0.25 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Explain the difference between read() and readline() methods of a file object in Python.",
        "answer": "read() vs readline()",
        "explanation": "1. read([n]) [1 Mark]: Reads n characters (or the entire content if n is omitted or negative) from the current position and returns it as a single string.\n2. readline() [1 Mark]: Reads one line from the file up to and including the newline ('\\n') character, returning it as a string. Returns an empty string '' at EOF."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Write a function CountVowelWords() in Python that counts and displays all words in a text file \"Article.txt\" that start with a vowel (A, E, I, O, U).",
        "answer": "CountVowelWords function implementation",
        "explanation": "Marking Scheme:\ndef CountVowelWords():\n    count = 0\n    vowels = ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')\n    with open(\"Article.txt\", \"r\") as f:  # [0.5 Mark]\n        text = f.read()                  # [0.5 Mark]\n        words = text.split()             # [0.5 Mark]\n        for w in words:                  # [0.5 Mark]\n            if w[0] in vowels:           # [0.5 Mark]\n                print(w)\n                count += 1\n    print(\"Count of vowel words:\", count) # [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is the role of seek() and tell() methods in random file access in Python?",
        "answer": "Role of seek() and tell()",
        "explanation": "1. tell() [1 Mark]: Returns the current byte offset/position of the file pointer within the file.\n2. seek(offset, whence) [1 Mark]: Repositions the file pointer to a designated byte location based on offset and whence (0 = beginning, 1 = current, 2 = end)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write a Python function CopyUpper() that reads from \"source.txt\" and writes all uppercase characters found in it to \"target.txt\".",
        "answer": "CopyUpper function implementation",
        "explanation": "Marking Scheme:\ndef CopyUpper():\n    with open(\"source.txt\", \"r\") as f_in, open(\"target.txt\", \"w\") as f_out:  # [1 Mark]\n        content = f_in.read()          # [0.5 Mark]\n        for ch in content:             # [0.5 Mark]\n            if ch.isupper():           # [0.5 Mark]\n                f_out.write(ch)        # [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is the difference between text files and binary files in terms of character translation and end-of-line encoding?",
        "answer": "Text files vs Binary files encoding",
        "explanation": "1. Text files [1 Mark]: Store data as human-readable plain text (ASCII/Unicode). EOL (End of Line) characters are translated automatically by Python according to the operating system (e.g. '\\r\\n' on Windows to '\\n').\n2. Binary files [1 Mark]: Store raw bytes directly as they exist in memory (e.g. image, compiled, serialized objects) without any character translation or EOL conversions."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Write a function CountThe() in Python that reads \"Book.txt\" and counts how many times the independent word \"the\" (or \"The\") appears in it.",
        "answer": "CountThe function implementation",
        "explanation": "Marking Scheme:\ndef CountThe():\n    count = 0\n    with open(\"Book.txt\", \"r\") as f:     # [0.5 Mark]\n        text = f.read()                  # [0.5 Mark]\n        words = text.split()             # [0.5 Mark]\n        for w in words:                  # [0.5 Mark]\n            if w.lower() == \"the\":       # [1 Mark] (exact word match ignoring case)\n                count += 1\n    print(\"Frequency of 'the':\", count)"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why is it important to close a file after completing file operations if not using the 'with' statement?",
        "answer": "Importance of closing files",
        "explanation": "1. Frees system resources: An open file consumes operating system file descriptors. [1 Mark]\n2. Prevents data corruption: Buffers may not be flushed to disk until close() is called, risking data loss if the program terminates unexpectedly. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Write a Python function FilterLines(source_file, target_file) that reads lines from source_file and writes to target_file only those lines that:\n(a) Do NOT start with the letter 'P' (case-insensitive).\n(b) Contain more than 5 words.\nAlso, display the count of lines copied and the count of lines omitted.",
        "answer": "FilterLines function implementation with file copying and counting",
        "explanation": "Marking Scheme:\n1. Open both files properly using with [1 Mark]:\ndef FilterLines(source_file, target_file):\n    copied_count = 0\n    omitted_count = 0\n    with open(source_file, 'r') as f_in, open(target_file, 'w') as f_out:\n\n2. Iteration and condition checks [2.5 Marks]:\n        for line in f_in:\n            stripped = line.strip()\n            if stripped:  # non-empty check\n                words = stripped.split()\n                # Condition: does not start with 'P'/'p' AND has > 5 words\n                if not stripped.lower().startswith('p') and len(words) > 5:\n                    f_out.write(line)  # preserves original newline\n                    copied_count += 1\n                else:\n                    omitted_count += 1\n\n3. Display results and function call [1.5 Marks]:\n    print(\"Lines copied:\", copied_count)\n    print(\"Lines omitted:\", omitted_count)\n\nFilterLines(\"Notes.txt\", \"FilteredNotes.txt\")"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Write user-defined functions in Python to perform the following operations on a text file \"Diary.txt\":\n(a) AddEntry(): Accepts a date and diary notes from the user and appends them to the file.\n(b) DisplayEntries(): Reads and displays all entries from the file.\n(c) SearchWord(word): Searches and prints all lines in \"Diary.txt\" that contain the specified word.",
        "answer": "Complete diary text file management application",
        "explanation": "Marking Scheme:\n1. AddEntry function [1.5 Marks]:\ndef AddEntry():\n    date = input(\"Enter date (DD-MM-YYYY): \")\n    entry = input(\"Enter diary notes: \")\n    with open(\"Diary.txt\", \"a\") as f:\n        f.write(f\"[{date}] {entry}\\n\")\n    print(\"Entry saved successfully.\")\n\n2. DisplayEntries function [1.5 Marks]:\ndef DisplayEntries():\n    try:\n        with open(\"Diary.txt\", \"r\") as f:\n            print(\"--- DIARY ENTRIES ---\")\n            print(f.read())\n    except FileNotFoundError:\n        print(\"Diary.txt does not exist yet.\")\n\n3. SearchWord function [2 Marks]:\ndef SearchWord(word):\n    found = False\n    try:\n        with open(\"Diary.txt\", \"r\") as f:\n            for line_no, line in enumerate(f, 1):\n                if word.lower() in line.lower():\n                    print(f\"Line {line_no}: {line.strip()}\")\n                    found = True\n        if not found:\n            print(f\"Word '{word}' not found in Diary.\")\n    except FileNotFoundError:\n        print(\"File not found.\")"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Write a Python function ReplaceWord(filename, old_word, new_word) that replaces all occurrences of old_word with new_word in a text file and saves the updated content back into the file. Also print the number of replacements made.",
        "answer": "In-place text replacement function",
        "explanation": "Marking Scheme:\n1. Open and read entire file [1.5 Marks]:\ndef ReplaceWord(filename, old_word, new_word):\n    with open(filename, \"r\") as f:\n        content = f.read()\n\n2. Replacement and count calculation [2 Marks]:\n    # Count occurrences\n    count = content.count(old_word)\n    # Perform replacement\n    updated_content = content.replace(old_word, new_word)\n\n3. Write updated content back and display count [1.5 Marks]:\n    with open(filename, \"w\") as f:\n        f.write(updated_content)\n    print(f\"Replaced {count} occurrences of '{old_word}' with '{new_word}'.\")\n\nReplaceWord(\"Sample.txt\", \"CBSE\", \"Board\")"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: School Library Log Analysis\nA librarian maintains a text file \"Log.txt\" recording student visits. Each line contains:\n`RollNo, StudentName, BookTitle, Time`\nExample line: `101, Rohan Sharma, Physics Vol 1, 10:30 AM`\n(i) Write a function CountVisits() that returns the total number of student visits logged.\n(ii) Write a function DisplayStudent(rno) that displays the details of visits made by a student with the given RollNo.\n(iii) Write a function PopularBook(title) that counts how many times a given book has been borrowed.",
        "answer": "Solutions to Library Log File Case Study",
        "explanation": "(i) Count visits [1 Mark]:\ndef CountVisits():\n    with open(\"Log.txt\", \"r\") as f:\n        return len(f.readlines())\n\n(ii) Display visits for a RollNo [1.5 Marks]:\ndef DisplayStudent(rno):\n    found = False\n    with open(\"Log.txt\", \"r\") as f:\n        for line in f:\n            data = line.strip().split(',')\n            if data[0].strip() == str(rno):\n                print(line.strip())\n                found = True\n    if not found:\n        print(\"No records found for Roll No:\", rno)\n\n(iii) Count borrowings of a book [1.5 Marks]:\ndef PopularBook(title):\n    count = 0\n    with open(\"Log.txt\", \"r\") as f:\n        for line in f:\n            data = line.strip().split(',')\n            if len(data) >= 3 and data[2].strip().lower() == title.lower():\n                count += 1\n    return count"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Write a Python program to read a text file \"Story.txt\" and:\n(a) Count the total number of alphabets, digits, and whitespace characters.\n(b) Count words that have more than 4 characters.\n(c) Display the longest line in the file.",
        "answer": "Comprehensive text file analytics program",
        "explanation": "Marking Scheme:\n1. Counting character types [2 Marks]:\ndef FileAnalytics():\n    alphas = 0\n    digits = 0\n    spaces = 0\n    with open(\"Story.txt\", \"r\") as f:\n        content = f.read()\n        for ch in content:\n            if ch.isalpha(): alphas += 1\n            elif ch.isdigit(): digits += 1\n            elif ch.isspace(): spaces += 1\n    print(\"Alphabets:\", alphas, \"Digits:\", digits, \"Whitespaces:\", spaces)\n\n2. Words longer than 4 characters [1.5 Marks]:\n    words = content.split()\n    long_words = [w for w in words if len(w) > 4]\n    print(\"Words with > 4 characters:\", len(long_words))\n\n3. Longest line [1.5 Marks]:\n    with open(\"Story.txt\", \"r\") as f:\n        lines = f.readlines()\n        longest_line = max(lines, key=len, default=\"\")\n        print(\"Longest line:\", longest_line.strip())"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Write a Python function SplitFile(input_file, file_even, file_odd) that reads a text file containing one integer on each line and writes even integers to file_even and odd integers to file_odd.",
        "answer": "SplitFile function implementation",
        "explanation": "Marking Scheme:\n1. Open files [1.5 Marks]:\ndef SplitFile(input_file, file_even, file_odd):\n    even_count = 0\n    odd_count = 0\n    with open(input_file, 'r') as f_in, open(file_even, 'w') as f_even, open(file_odd, 'w') as f_odd:\n\n2. Read and classify integers [2 Marks]:\n        for line in f_in:\n            s = line.strip()\n            if s.lstrip('-').isdigit():  # handle negative numbers\n                val = int(s)\n                if val % 2 == 0:\n                    f_even.write(str(val) + '\\n')\n                    even_count += 1\n                else:\n                    f_odd.write(str(val) + '\\n')\n                    odd_count += 1\n\n3. Display summary [1.5 Marks]:\n    print(f\"Separation complete: {even_count} evens, {odd_count} odds.\")\n\nSplitFile(\"numbers.txt\", \"even.txt\", \"odd.txt\")"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Write a Python function DisplayHash() that reads the content of a text file \"Content.txt\" and displays the entire content with every space replaced by a '#' character.",
        "answer": "DisplayHash function implementation",
        "explanation": "Marking Scheme:\n1. Open and read file [1.5 Marks]:\ndef DisplayHash():\n    with open(\"Content.txt\", \"r\") as f:\n        content = f.read()\n\n2. Replace and display [2.5 Marks]:\n    modified = content.replace(' ', '#')\n    print(modified)\n\nDisplayHash()"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is the difference between f.seek(10, 0) and f.seek(10, 1)?\n(b) Write a Python program to count the frequency of the word \"computer\" in a text file \"Essay.txt\", ignoring case.",
        "answer": "(a) Seek offset explanation; (b) Word frequency program",
        "explanation": "Marking Scheme:\n(a) Seek Explanation (2 Marks):\n- f.seek(10, 0): Sets the file pointer 10 bytes forward relative to the beginning of the file (whence = 0). [1 Mark]\n- f.seek(10, 1): Sets the file pointer 10 bytes forward relative to the current file pointer location (whence = 1). [1 Mark]\n\n(b) Word Frequency Program (3 Marks):\ndef CountComputer():\n    count = 0\n    with open(\"Essay.txt\", \"r\") as f:\n        for line in f:\n            words = line.strip().split()\n            for w in words:\n                # strip punctuation if needed and compare\n                clean_w = w.strip(\".,!?;:'\\\"\").lower()\n                if clean_w == \"computer\":\n                    count += 1\n    print(\"Frequency of 'computer':\", count)\n\nCountComputer()"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write a Python function ReverseLines(source, destination) that reads a text file and writes its lines in reverse order (last line first) to the destination file.",
        "answer": "ReverseLines function implementation",
        "explanation": "Marking Scheme:\n1. Open source and destination files [1 Mark]:\ndef ReverseLines(source, destination):\n    with open(source, 'r') as f_in, open(destination, 'w') as f_out:\n\n2. Read lines and reverse list [2 Marks]:\n        lines = f_in.readlines()\n        reversed_lines = lines[::-1]\n\n3. Write reversed lines [1 Mark]:\n        f_out.writelines(reversed_lines)\n    print(\"File lines reversed successfully.\")"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Explain what happens when a file opened in 'r+' mode is written to.\n(b) Write a Python program that reads a text file \"Poem.txt\" and creates a new file \"LowerPoem.txt\" where all uppercase letters are converted to lowercase, and all digits are removed.",
        "answer": "(a) 'r+' mode behavior; (b) File transformation program",
        "explanation": "Marking Scheme:\n(a) 'r+' Mode Behavior (2 Marks):\n- In 'r+' mode (read and write), the file must exist. The pointer starts at byte 0. Writing overrides existing characters at the current pointer position without truncating the rest of the file. [2 Marks]\n\n(b) File Transformation Program (3 Marks):\ndef TransformPoem():\n    with open(\"Poem.txt\", \"r\") as f_in, open(\"LowerPoem.txt\", \"w\") as f_out:\n        for line in f_in:\n            new_line = \"\"\n            for ch in line:\n                if not ch.isdigit():\n                    new_line += ch.lower()\n            f_out.write(new_line)\n    print(\"LowerPoem.txt created successfully.\")\n\nTransformPoem()"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "unit_num": 1,
      "title": "File Handling - Binary and CSV Files",
      "unit_title": "Unit I: Computational Thinking and Programming - 2",
      "weightage_unit": "40 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which Python module is required to work with binary files for serialization and deserialization?",
        "answer": "(a) pickle",
        "explanation": "The 'pickle' module is Python's standard library for object serialization (converting Python objects into a byte stream) and deserialization.",
        "options": [
          "(a) pickle",
          "(b) binary",
          "(c) struct",
          "(d) serial"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which exception is raised when pickle.load() reaches the end of a binary file?",
        "answer": "(a) EOFError",
        "explanation": "When pickle.load() encounters the End Of File (EOF) while attempting to read an object, it raises an EOFError.",
        "options": [
          "(a) EOFError",
          "(b) FileNotFoundError",
          "(c) StopIteration",
          "(d) IOError"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "To avoid blank lines between rows when writing to a CSV file in Python 3, which argument should be passed to open()?",
        "answer": "(a) newline=''",
        "explanation": "Passing newline='' to the open() function disables Python's universal newline translation, preventing extra carriage return / newline characters from producing empty blank lines in CSV files.",
        "options": [
          "(a) newline=''",
          "(b) blank=False",
          "(c) skip_newline=True",
          "(d) eol=None"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which method of the pickle module is used to write a Python object to an open binary file?",
        "answer": "(a) pickle.dump()",
        "explanation": "pickle.dump(object, file_handle) serializes an object hierarchy and writes it to the specified binary file.",
        "options": [
          "(a) pickle.dump()",
          "(b) pickle.load()",
          "(c) pickle.write()",
          "(d) pickle.store()"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which method of the csv.writer object writes a single row of data to a CSV file?",
        "answer": "(a) writerow()",
        "explanation": "The writerow() method writes a single sequence of fields (such as a list or tuple) as a formatted row in the CSV file.",
        "options": [
          "(a) writerow()",
          "(b) writerows()",
          "(c) write()",
          "(d) appendrow()"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What is the default delimiter in a CSV file processed by the Python csv module?",
        "answer": "(a) Comma (,)",
        "explanation": "The default field delimiter in the csv module is a comma (','). It can be customized using the 'delimiter' parameter.",
        "options": [
          "(a) Comma (,)",
          "(b) Semicolon (;)",
          "(c) Tab (\\t)",
          "(d) Space ( )"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following modes must be used to open a binary file for appending data?",
        "answer": "(a) 'ab'",
        "explanation": "'ab' opens a file in binary mode for appending. New data is written at the end without truncating existing bytes.",
        "options": [
          "(a) 'ab'",
          "(b) 'a'",
          "(c) 'wb'",
          "(d) 'rb+'"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What does deserialization (unpickling) mean in Python?",
        "answer": "(a) Converting a byte stream back into a Python object in memory",
        "explanation": "Deserialization or unpickling is the inverse process of pickling: reading a byte stream from a binary file and reconstructing the original Python object hierarchy.",
        "options": [
          "(a) Converting a byte stream back into a Python object in memory",
          "(b) Converting an object into a byte stream on disk",
          "(c) Compiling Python code to bytecode",
          "(d) Encrypting file contents"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "What will be the output of type(row) for each element returned by csv.reader(f)?",
        "answer": "(a) <class 'list'>",
        "explanation": "The csv.reader iterator parses each line of a CSV file and yields each row as a list of strings.",
        "options": [
          "(a) <class 'list'>",
          "(b) <class 'str'>",
          "(c) <class 'dict'>",
          "(d) <class 'tuple'>"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which mode is used to open an existing binary file for both reading and writing without truncation?",
        "answer": "(a) 'rb+'",
        "explanation": "'rb+' opens an existing binary file for both reading and writing without truncating it. 'wb+' truncates the file.",
        "options": [
          "(a) 'rb+'",
          "(b) 'wb+'",
          "(c) 'ab+'",
          "(d) 'r+'"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "To read all records from a binary file 'data.dat' dumped with multiple objects, which construct is commonly used?",
        "answer": "(a) while True with try-except EOFError",
        "explanation": "Because pickle.dump writes individual objects, reading multiple objects requires a loop calling pickle.load(f) until an EOFError is caught.",
        "options": [
          "(a) while True with try-except EOFError",
          "(b) for row in pickle.load(f):",
          "(c) while f.read():",
          "(d) for line in f:"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is the extension typically given to binary data files in Python?",
        "answer": "(d) Any extension (conventionally .dat or .bin)",
        "explanation": "Python does not enforce file extensions. Any extension can be used, though .dat, .bin, or .pkl are conventional.",
        "options": [
          "(a) .dat",
          "(b) .bin",
          "(c) .pck",
          "(d) Any extension (conventionally .dat or .bin)"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which csv module method writes multiple rows of data given as a nested list?",
        "answer": "(a) writerows()",
        "explanation": "csv.writer.writerows(records) takes an iterable of row sequences and writes each as a separate row in the CSV file.",
        "options": [
          "(a) writerows()",
          "(b) writerow()",
          "(c) writeall()",
          "(d) dump()"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What happens if pickle.load() is called on an empty binary file?",
        "answer": "(a) EOFError is raised",
        "explanation": "Calling pickle.load() on an empty file immediately hits the end of file and raises an EOFError.",
        "options": [
          "(a) EOFError is raised",
          "(b) None is returned",
          "(c) Empty list is returned",
          "(d) 0 is returned"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a CSV file, how can a field containing a comma itself (e.g., 'Delhi, India') be stored without splitting into two columns?",
        "answer": "(a) Enclosed in quotation marks (\"Delhi, India\")",
        "explanation": "Standard CSV formatting encloses fields containing delimiters (commas) in quotes (\") so the parser does not interpret the embedded comma as a delimiter.",
        "options": [
          "(a) Enclosed in quotation marks (\"Delhi, India\")",
          "(b) Preceded by a slash (\\Delhi, India)",
          "(c) Cannot be stored",
          "(d) Enclosed in brackets [Delhi, India]"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which statement correctly imports the module for reading CSV files?",
        "answer": "(a) import csv",
        "explanation": "The built-in Python module is named 'csv' in lowercase. 'import csv' is the correct statement.",
        "options": [
          "(a) import csv",
          "(b) import CSV",
          "(c) from file import csv",
          "(d) import pickle.csv"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the correct syntax to open a binary file named 'emp.dat' in write mode?",
        "answer": "(a) open('emp.dat', 'wb')",
        "explanation": "Binary write mode is specified by 'wb' ('w' for write, 'b' for binary).",
        "options": [
          "(a) open('emp.dat', 'wb')",
          "(b) open('emp.dat', 'w')",
          "(c) open('emp.dat', 'b')",
          "(d) open('emp.dat', 'bw')"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What does csv.DictReader do in Python?",
        "answer": "(a) Reads CSV rows directly into Python dictionaries using the header as keys",
        "explanation": "csv.DictReader maps the information in each row to a dict whose keys are given by the optional fieldnames parameter or the first row of the CSV file.",
        "options": [
          "(a) Reads CSV rows directly into Python dictionaries using the header as keys",
          "(b) Converts a dictionary to CSV",
          "(c) Sorts CSV records alphabetically",
          "(d) Reads binary files into dictionaries"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If you need to update a specific record in a binary file using tell() and seek(), which mode must you use?",
        "answer": "(a) 'rb+'",
        "explanation": "'rb+' allows reading the file to locate the record position (via tell()), seeking back to that position, and overwriting the record in-place.",
        "options": [
          "(a) 'rb+'",
          "(b) 'wb'",
          "(c) 'ab'",
          "(d) 'w+'"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Can complex Python data structures like dictionaries and nested lists be stored directly in binary files using pickle?",
        "answer": "(a) Yes, pickle supports almost all Python built-in objects",
        "explanation": "The pickle protocol can serialize almost all built-in Python data types including nested lists, tuples, dictionaries, sets, and user-defined class instances.",
        "options": [
          "(a) Yes, pickle supports almost all Python built-in objects",
          "(b) No, only integers can be stored",
          "(c) No, only strings can be stored",
          "(d) Only tuples are supported"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What will be printed by the following code if 'data.csv' has 3 rows of data?\nimport csv\nwith open('data.csv', 'r') as f:\n    r = csv.reader(f)\n    print(len(list(r)))",
        "answer": "(a) 3",
        "explanation": "list(r) exhausts the reader iterator and converts all rows into a list of row lists. The length of this list is the number of rows, which is 3.",
        "options": [
          "(a) 3",
          "(b) Number of characters",
          "(c) 1",
          "(d) Error"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following is true about binary files compared to text files?",
        "answer": "(a) Binary files are faster to read and write for complex objects",
        "explanation": "Binary files store data in native byte format without encoding/decoding overhead, making them significantly faster and more accurate for complex numeric and structured data.",
        "options": [
          "(a) Binary files are faster to read and write for complex objects",
          "(b) Binary files can be easily edited in Notepad",
          "(c) Binary files store characters with automatic EOL translation",
          "(d) Binary files take more space for all data types"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the output of the following code?\nimport csv\nwith open('test.csv', 'w', newline='') as f:\n    w = csv.writer(f, delimiter='|')\n    w.writerow(['A', 'B', 'C'])",
        "answer": "(a) Writes 'A|B|C' into test.csv",
        "explanation": "Specifying delimiter='|' causes the csv.writer to separate each field with a pipe '|' character instead of the default comma, resulting in 'A|B|C'.",
        "options": [
          "(a) Writes 'A|B|C' into test.csv",
          "(b) Writes 'A,B,C' into test.csv",
          "(c) Raises ValueError",
          "(d) Writes ['A', 'B', 'C']"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "When reading a binary file in Python using a while loop, which block handles the loop termination?",
        "answer": "(a) except EOFError:",
        "explanation": "When pickle.load() reaches the end of the file, it raises an EOFError. Catching this in an 'except EOFError:' block provides the standard graceful exit condition.",
        "options": [
          "(a) except EOFError:",
          "(b) except FileNotFoundError:",
          "(c) finally:",
          "(d) while EOF:"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which method is used to close an open CSV file object in Python?",
        "answer": "(a) f.close()",
        "explanation": "The file object itself provides the close() method (f.close()). The csv module operates on top of the open file stream.",
        "options": [
          "(a) f.close()",
          "(b) csv.close(f)",
          "(c) f.stop()",
          "(d) csv.exit()"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Binary files are not human-readable when opened in a standard text editor.\nReason (R): Binary files store data in the form of raw bytes representing internal computer memory representations rather than plain ASCII/Unicode text.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why text editors display unreadable symbols/characters when viewing binary files.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): When opening a CSV file for writing in Python 3 on Windows, passing newline='' is recommended.\nReason (R): If newline='' is not specified, Python's default newline translation adds an extra carriage return ('\\r'), producing blank lines between rows.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the technical cause of blank rows in CSV file generation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): pickle.dump() takes two primary arguments: the object to serialize and the file handle.\nReason (R): pickle.load() takes only the file handle as its argument to deserialize and return an object.",
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both statements are true definitions of the function signatures of dump() and load(), but R describes load() and does not explain the signature of dump().",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): CSV files can be imported into and exported from spreadsheet applications like Microsoft Excel.\nReason (R): CSV files store structured tabular data using a simple delimiter-separated plain text format.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why CSV is universal across spreadsheet and database platforms.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): An EOFError is an abnormal crash in Python that indicates a corrupted binary file.\nReason (R): In Python file handling, EOFError is a normal signal raised by pickle.load() when the end of a file has been reached.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE: EOFError is the expected standard mechanism to detect the end of stream when reading sequential pickle objects. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "What is pickling and unpickling in Python? Name the module used for this purpose.",
        "answer": "Pickling and unpickling definitions",
        "explanation": "1. Pickling (Serialization) [0.75 Mark]: The process of converting a Python object hierarchy into a byte stream so that it can be stored on disk or transmitted.\n2. Unpickling (Deserialization) [0.75 Mark]: The inverse process of converting a byte stream from a binary file back into a live Python object in memory.\n3. Module [0.5 Mark]: The 'pickle' module."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Write a Python statement to:\n(i) Open a binary file \"student.dat\" in append mode.\n(ii) Write a dictionary rec = {'Roll': 101, 'Name': 'Ananya'} into the file using pickle.",
        "answer": "Python statements for binary append and dump",
        "explanation": "(i) f = open(\"student.dat\", \"ab\") [1 Mark]\n(ii) import pickle; pickle.dump(rec, f) [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Write a function CountStudents() in Python that reads a binary file \"student.dat\" containing records in the format [RollNo, Name, Marks] and displays the total number of students who scored marks above 85.",
        "answer": "CountStudents function implementation",
        "explanation": "Marking Scheme:\nimport pickle                                  # [0.5 Mark]\ndef CountStudents():\n    count = 0\n    try:\n        with open(\"student.dat\", \"rb\") as f:  # [0.5 Mark] open file\n            while True:                        # [0.5 Mark] loop\n                rec = pickle.load(f)           # [0.5 Mark] load object\n                if rec[2] > 85:                # [0.5 Mark] condition\n                    count += 1\n    except EOFError:                           # [0.25 Mark] catch EOF\n        pass\n    print(\"Students with marks > 85:\", count) # [0.25 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "What is a CSV file? Mention two advantages of using CSV files for data storage.",
        "answer": "CSV definition and advantages",
        "explanation": "1. Definition [1 Mark]: A CSV (Comma Separated Values) file is a plain text file that stores tabular data where each line is a data record and fields within each record are separated by commas (or other delimiters).\n2. Advantages [1 Mark]:\n- Highly portable and compatible across spreadsheet applications (Excel, Google Sheets) and database management systems.\n- Lightweight, human-readable plain text format requiring minimal storage overhead."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Write a function CreateCSV() in Python to create a CSV file \"users.csv\" and write the following records into it:\nHeader: UserID, Username, Role\nRecords: [1, 'admin', 'Superuser'], [2, 'john', 'Editor'], [3, 'emma', 'Viewer'].",
        "answer": "CreateCSV function implementation",
        "explanation": "Marking Scheme:\nimport csv                                                 # [0.5 Mark]\ndef CreateCSV():\n    header = ['UserID', 'Username', 'Role']\n    data = [[1, 'admin', 'Superuser'], [2, 'john', 'Editor'], [3, 'emma', 'Viewer']]\n    with open('users.csv', 'w', newline='') as f:          # [1 Mark] open with newline=''\n        writer = csv.writer(f)                             # [0.5 Mark] create writer\n        writer.writerow(header)                            # [0.5 Mark] write header\n        writer.writerows(data)                             # [0.5 Mark] write rows"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Differentiate between dump() and load() methods of the pickle module.",
        "answer": "dump() vs load()",
        "explanation": "1. pickle.dump(object, file_handle) [1 Mark]: Used for writing (serializing) a Python object into an open binary file.\n2. pickle.load(file_handle) [1 Mark]: Used for reading (deserializing) and returning a Python object from an open binary file."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write a function ReadCSV() in Python that reads and displays only those rows from \"employee.csv\" where the Salary (column index 2) is greater than 50000.",
        "answer": "ReadCSV function implementation",
        "explanation": "Marking Scheme:\nimport csv\ndef ReadCSV():\n    with open(\"employee.csv\", \"r\") as f:     # [0.5 Mark]\n        reader = csv.reader(f)                # [0.5 Mark]\n        header = next(reader)                 # [0.5 Mark] skip header\n        print(header)\n        for row in reader:                    # [0.5 Mark] iterate\n            if len(row) > 2 and float(row[2]) > 50000: # [1 Mark] convert & compare\n                print(row)"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is the difference between writerow() and writerows() methods of the csv module?",
        "answer": "writerow() vs writerows()",
        "explanation": "1. writerow(row) [1 Mark]: Writes a single row containing a 1D sequence of field values (e.g. ['A', 'B', 'C']).\n2. writerows(rows) [1 Mark]: Writes multiple rows at once from a 2D sequence of row sequences (e.g. [['A', 'B'], ['C', 'D']])."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Write a Python function SearchBook(bid) that reads a binary file \"book.dat\" containing records as dictionaries: {'BookNo': int, 'Title': str, 'Price': float} and displays the title and price of the book whose BookNo matches bid. Display an error message if not found.",
        "answer": "SearchBook function implementation",
        "explanation": "Marking Scheme:\nimport pickle\ndef SearchBook(bid):\n    found = False\n    try:\n        with open(\"book.dat\", \"rb\") as f:     # [0.5 Mark]\n            while True:                        # [0.5 Mark]\n                b = pickle.load(f)             # [0.5 Mark]\n                if b['BookNo'] == bid:         # [0.5 Mark]\n                    print(\"Title:\", b['Title'], \"Price:\", b['Price'])\n                    found = True\n                    break\n    except EOFError:                           # [0.5 Mark]\n        pass\n    if not found:\n        print(\"Book ID\", bid, \"not found.\")    # [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why is binary mode ('b') mandatory when dealing with pickled files in Python?",
        "answer": "Necessity of binary mode for pickling",
        "explanation": "Pickle converts Python objects into raw byte streams (bytes). If opened in text mode ('w' or 'r'), Python attempts character encoding and newline translations on binary data, which corrupts the serialized bytes and causes unpickling to fail. [2 Marks]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Write a menu-driven Python program to manage student records in a binary file \"student.dat\" using the pickle module. Each record is stored as a list [RollNo, Name, Marks]. Provide functions for:\n(a) InsertRecord(): Appends a new student record to the file.\n(b) DisplayAll(): Displays all student records from the file.\n(c) UpdateMarks(rno, new_marks): Updates the marks of the student with RollNo rno.",
        "answer": "Complete binary file CRUD program for student records",
        "explanation": "Marking Scheme:\nimport pickle\nimport os\n\n# 1. InsertRecord function [1.5 Marks]:\ndef InsertRecord():\n    rno = int(input(\"Enter Roll No: \"))\n    name = input(\"Enter Name: \")\n    marks = float(input(\"Enter Marks: \"))\n    with open(\"student.dat\", \"ab\") as f:\n        pickle.dump([rno, name, marks], f)\n    print(\"Record inserted successfully.\")\n\n# 2. DisplayAll function [1.5 Marks]:\ndef DisplayAll():\n    try:\n        with open(\"student.dat\", \"rb\") as f:\n            print(f\"{'RollNo':<8} {'Name':<15} {'Marks':<6}\")\n            print(\"-\" * 30)\n            while True:\n                rec = pickle.load(f)\n                print(f\"{rec[0]:<8} {rec[1]:<15} {rec[2]:<6.1f}\")\n    except EOFError:\n        pass\n    except FileNotFoundError:\n        print(\"File student.dat does not exist.\")\n\n# 3. UpdateMarks function [2 Marks]:\ndef UpdateMarks(rno, new_marks):\n    found = False\n    records = []\n    try:\n        with open(\"student.dat\", \"rb\") as f:\n            while True:\n                rec = pickle.load(f)\n                if rec[0] == rno:\n                    rec[2] = new_marks\n                    found = True\n                records.append(rec)\n    except EOFError:\n        pass\n\n    if found:\n        with open(\"student.dat\", \"wb\") as f:\n            for r in records:\n                pickle.dump(r, f)\n        print(\"Record updated successfully.\")\n    else:\n        print(\"Roll No not found.\")"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "A CSV file \"products.csv\" contains product details: `ProductID, ProductName, Category, Price, StockQuantity`.\nWrite Python functions to:\n(a) AddProduct(): Appends a new product record to \"products.csv\".\n(b) FilterCategory(cat): Reads the CSV file and displays all products belonging to category cat.\n(c) TotalInventoryValue(): Computes and displays the total inventory valuation (Price * StockQuantity) across all products.",
        "answer": "CSV file product inventory processing program",
        "explanation": "Marking Scheme:\nimport csv\n\n# (a) AddProduct [1.5 Marks]:\ndef AddProduct():\n    pid = input(\"Enter Product ID: \")\n    pname = input(\"Enter Product Name: \")\n    category = input(\"Enter Category: \")\n    price = float(input(\"Enter Price: \"))\n    stock = int(input(\"Enter Stock Quantity: \"))\n    with open(\"products.csv\", \"a\", newline='') as f:\n        writer = csv.writer(f)\n        writer.writerow([pid, pname, category, price, stock])\n    print(\"Product added successfully.\")\n\n# (b) FilterCategory [1.5 Marks]:\ndef FilterCategory(cat):\n    with open(\"products.csv\", \"r\") as f:\n        reader = csv.reader(f)\n        print(f\"Products in category '{cat}':\")\n        for row in reader:\n            if len(row) >= 5 and row[2].strip().lower() == cat.strip().lower():\n                print(f\"{row[0]} | {row[1]} | ₹{row[3]} | Qty: {row[4]}\")\n\n# (c) TotalInventoryValue [2 Marks]:\ndef TotalInventoryValue():\n    total_val = 0.0\n    with open(\"products.csv\", \"r\") as f:\n        reader = csv.reader(f)\n        header = next(reader, None)  # skip header if present\n        for row in reader:\n            if len(row) >= 5:\n                try:\n                    total_val += float(row[3]) * int(row[4])\n                except ValueError:\n                    continue\n    print(f\"Total Inventory Value: ₹{total_val:,.2f}\")"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Write a Python function DeleteRecord(roll) to delete the record of a student whose RollNo is roll from a binary file \"student.dat\". Implement this using a temporary file \"temp.dat\".",
        "answer": "Record deletion in binary file using temporary file",
        "explanation": "Marking Scheme:\n1. Module imports and file opening [1.5 Marks]:\nimport pickle\nimport os\n\ndef DeleteRecord(roll):\n    found = False\n    try:\n        with open(\"student.dat\", \"rb\") as f_in, open(\"temp.dat\", \"wb\") as f_out:\n\n2. Copy records excluding target roll [2 Marks]:\n            while True:\n                try:\n                    rec = pickle.load(f_in)\n                    if rec[0] == roll:\n                        found = True  # skip copying this record\n                    else:\n                        pickle.dump(rec, f_out)\n                except EOFError:\n                    break\n    except FileNotFoundError:\n        print(\"File student.dat not found.\")\n        return\n\n3. File replacement and status message [1.5 Marks]:\n    os.remove(\"student.dat\")\n    os.rename(\"temp.dat\", \"student.dat\")\n    if found:\n        print(f\"Record with Roll No {roll} deleted successfully.\")\n    else:\n        print(f\"Roll No {roll} not found in file.\")"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: Hospital Patient Records Management\nA clinic stores patient records in a binary file \"patients.dat\". Each record is a dictionary with structure:\n`{'PID': int, 'Name': str, 'Age': int, 'Diagnosis': str}`\n(i) Write a function AddPatient(pid, name, age, diag) to append a patient dictionary to \"patients.dat\".\n(ii) Write a function SeniorPatients() that reads \"patients.dat\" and displays all patients aged 60 and above.\n(iii) Write a function CountDiagnosis(condition) that counts how many patients have been diagnosed with a specified condition (e.g. 'Diabetes').",
        "answer": "Solutions to Patient Records Binary File Case Study",
        "explanation": "import pickle\n\n(i) AddPatient [1 Mark]:\ndef AddPatient(pid, name, age, diag):\n    p = {'PID': pid, 'Name': name, 'Age': age, 'Diagnosis': diag}\n    with open(\"patients.dat\", \"ab\") as f:\n        pickle.dump(p, f)\n\n(ii) SeniorPatients [1.5 Marks]:\ndef SeniorPatients():\n    try:\n        with open(\"patients.dat\", \"rb\") as f:\n            while True:\n                p = pickle.load(f)\n                if p['Age'] >= 60:\n                    print(f\"{p['PID']}: {p['Name']} (Age: {p['Age']}, {p['Diagnosis']})\")\n    except EOFError:\n        pass\n\n(iii) CountDiagnosis [1.5 Marks]:\ndef CountDiagnosis(condition):\n    count = 0\n    try:\n        with open(\"patients.dat\", \"rb\") as f:\n            while True:\n                p = pickle.load(f)\n                if p['Diagnosis'].lower() == condition.lower():\n                    count += 1\n    except EOFError:\n        pass\n    return count"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Write a Python program that reads a CSV file \"sales.csv\" containing `Salesperson, Region, Month, Amount` and:\n(a) Calculates the total sales for each salesperson using a dictionary.\n(b) Finds the salesperson with the highest total sales.\n(c) Calculates the total sales generated in the 'North' region.",
        "answer": "CSV sales analytics program with dictionary aggregation",
        "explanation": "Marking Scheme:\nimport csv\n\ndef AnalyzeSales():\n    sales_per_person = {}\n    north_sales = 0.0\n \n    with open(\"sales.csv\", \"r\") as f:\n        reader = csv.reader(f)\n        header = next(reader, None)  # skip header\n \n        for row in reader:\n            if len(row) >= 4:\n                person = row[0].strip()\n                region = row[1].strip()\n                try:\n                    amt = float(row[3].strip())\n                except ValueError:\n                    continue\n \n                # (a) Aggregate sales per person [2 Marks]\n                sales_per_person[person] = sales_per_person.get(person, 0.0) + amt\n \n                # (c) North region sales [1.5 Marks]\n                if region.lower() == 'north':\n                    north_sales += amt\n \n    # Display summary [1.5 Marks]\n    print(\"--- Sales per Person ---\")\n    for p, tot in sales_per_person.items():\n        print(f\"{p}: ₹{tot:,.2f}\")\n \n    # (b) Top salesperson\n    if sales_per_person:\n        top_person = max(sales_per_person, key=sales_per_person.get)\n        print(f\"\\nTop Salesperson: {top_person} with ₹{sales_per_person[top_person]:,.2f}\")\n    print(f\"Total North Region Sales: ₹{north_sales:,.2f}\")\n\nAnalyzeSales()"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Write a Python function InPlaceUpdate(roll, new_name) that updates the student name in \"student.dat\" for RollNo roll in-place without creating a temporary file, using tell() and seek(). Each record is a list [RollNo, Name, Marks].",
        "answer": "In-place binary file record update implementation",
        "explanation": "Marking Scheme:\n1. Open in 'rb+' mode [1 Mark]:\nimport pickle\ndef InPlaceUpdate(roll, new_name):\n    found = False\n    with open(\"student.dat\", \"rb+\") as f:\n\n2. Track position using tell() before loading [2 Marks]:\n        while True:\n            pos = f.tell()  # Record byte offset before reading\n            try:\n                rec = pickle.load(f)\n                if rec[0] == roll:\n                    rec[1] = new_name\n                    # Seek back to starting offset of this record [1 Mark]\n                    f.seek(pos)\n                    pickle.dump(rec, f)\n                    found = True\n                    break\n            except EOFError:\n                break\n\n3. Status feedback [1 Mark]:\n    if found:\n        print(f\"Record for Roll No {roll} updated to '{new_name}'.\")\n    else:\n        print(f\"Roll No {roll} not found.\")"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Write a Python function ConvertTextToCSV(text_file, csv_file) that reads a tab-separated text file \"data.txt\" and writes its content into \"data.csv\" with comma delimiter.",
        "answer": "Text to CSV converter function",
        "explanation": "Marking Scheme:\n1. Open both files [1 Mark]:\nimport csv\ndef ConvertTextToCSV(text_file, csv_file):\n    with open(text_file, 'r') as f_in, open(csv_file, 'w', newline='') as f_out:\n        writer = csv.writer(f_out, delimiter=',')  # [1 Mark]\n\n2. Split and write [2 Marks]:\n        for line in f_in:\n            fields = line.strip().split('\\t')\n            writer.writerow(fields)\n    print(\"Conversion from TSV to CSV completed.\")"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Explain why a try-except EOFError loop is necessary when reading objects dumped individually in a binary file.\n(b) Write a function CountRecords(filename) that returns the total count of pickled objects stored in any given binary file.",
        "answer": "(a) Need for EOFError loop; (b) CountRecords function",
        "explanation": "Marking Scheme:\n(a) Explanation (2 Marks):\n- Unlike text files which have a character-based stream ending with an empty string '', pickle.load() does not return a sentinel value at the end of the file. Instead, it raises an EOFError exception. Hence a 'while True' loop enclosed in 'try...except EOFError' is the standard idiomatic way to read until exhaustion. [2 Marks]\n\n(b) CountRecords Function (3 Marks):\nimport pickle\ndef CountRecords(filename):\n    count = 0\n    try:\n        with open(filename, \"rb\") as f:\n            while True:\n                pickle.load(f)\n                count += 1\n    except EOFError:\n        pass\n    except FileNotFoundError:\n        print(\"File not found:\", filename)\n        return 0\n    return count\n\nprint(\"Total records:\", CountRecords(\"student.dat\"))"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write a Python program to read \"employee.csv\" and create a new CSV file \"high_salary.csv\" containing only those employees whose designation is \"Manager\" and salary is greater than 75000.",
        "answer": "CSV file filtering and creation program",
        "explanation": "Marking Scheme:\n1. Open both files with appropriate parameters [1.5 Marks]:\nimport csv\ndef FilterManagers():\n    with open(\"employee.csv\", \"r\") as f_in, open(\"high_salary.csv\", \"w\", newline='') as f_out:\n        reader = csv.reader(f_in)\n        writer = csv.writer(f_out)\n        header = next(reader, None)\n        if header:\n            writer.writerow(header)\n\n2. Filtering and writing rows [2.5 Marks]:\n        count = 0\n        for row in reader:\n            # Expected format: [EmpID, Name, Designation, Salary]\n            if len(row) >= 4:\n                desig = row[2].strip().lower()\n                try:\n                    sal = float(row[3].strip())\n                except ValueError:\n                    continue\n                if desig == \"manager\" and sal > 75000:\n                    writer.writerow(row)\n                    count += 1\n        print(f\"Copied {count} qualifying manager records.\")\n\nFilterManagers()"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Differentiate between pickle.dumps() and pickle.dump().\n(b) Write a function DisplayLowStock(threshold) that reads \"items.dat\" containing dictionaries of items `{'ItemCode': int, 'ItemName': str, 'Qty': int}` and displays all items whose quantity is below threshold.",
        "answer": "(a) dump() vs dumps(); (b) DisplayLowStock function",
        "explanation": "Marking Scheme:\n(a) dump() vs dumps() (2 Marks):\n- pickle.dump(obj, file): Serializes obj directly and writes the byte stream to an open file. [1 Mark]\n- pickle.dumps(obj): Serializes obj and returns the resulting byte stream as a bytes object in memory, without writing to any file. [1 Mark]\n\n(b) DisplayLowStock Function (3 Marks):\nimport pickle\ndef DisplayLowStock(threshold):\n    found = False\n    try:\n        with open(\"items.dat\", \"rb\") as f:\n            print(f\"Items with quantity < {threshold}:\")\n            while True:\n                item = pickle.load(f)\n                if item['Qty'] < threshold:\n                    print(f\"Code: {item['ItemCode']}, Name: {item['ItemName']}, Qty: {item['Qty']}\")\n                    found = True\n    except EOFError:\n        pass\n    except FileNotFoundError:\n        print(\"File items.dat does not exist.\")\n    if not found:\n        print(\"No items below threshold.\")\n\nDisplayLowStock(10)"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "unit_num": 1,
      "title": "Data Structures - Stack",
      "unit_title": "Unit I: Computational Thinking and Programming - 2",
      "weightage_unit": "40 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which principle does a Stack data structure follow for insertion and deletion of elements?",
        "answer": "(a) LIFO (Last In First Out)",
        "explanation": "A stack is a linear data structure in which insertions and deletions take place at only one end, called Top, strictly following the Last In First Out (LIFO) principle.",
        "options": [
          "(a) LIFO (Last In First Out)",
          "(b) FIFO (First In First Out)",
          "(c) Random Access",
          "(d) Priority"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Attempting to remove an element from an empty stack is known as:",
        "answer": "(a) Underflow",
        "explanation": "Trying to pop or delete an item from an empty stack (where Top is -1 or len(stack) == 0) results in a Stack Underflow error.",
        "options": [
          "(a) Underflow",
          "(b) Overflow",
          "(c) Garbage collection",
          "(d) Empty state"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which Python list method is used to implement the Push operation in a stack?",
        "answer": "(a) append()",
        "explanation": "In Python list implementation of a stack, elements are pushed onto the top of the stack by appending to the end of the list using list.append(item).",
        "options": [
          "(a) append()",
          "(b) insert(0, item)",
          "(c) extend()",
          "(d) push()"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If elements 10, 20, 30, and 40 are pushed onto a stack in that order, which element will be popped first?",
        "answer": "(a) 40",
        "explanation": "By the LIFO principle, the last element pushed onto the stack (40) is at the top of the stack and is the first element to be popped.",
        "options": [
          "(a) 40",
          "(b) 10",
          "(c) 20",
          "(d) 30"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What is the index of the top element in a Python list-based stack 'st' of length n?",
        "answer": "(a) -1 (or n - 1)",
        "explanation": "In a Python list-based stack where items are appended, the top element is always at the last index, which is st[-1] or st[n - 1].",
        "options": [
          "(a) -1 (or n - 1)",
          "(b) 0",
          "(c) n",
          "(d) 1"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which operation in a stack inspects the top element without removing it?",
        "answer": "(a) Peek",
        "explanation": "The 'Peek' (or 'Inspect') operation returns the value of the element currently at the top of the stack without deleting or removing it.",
        "options": [
          "(a) Peek",
          "(b) Pop",
          "(c) Push",
          "(d) Seek"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In a dynamic list implementation of stack in Python, when does a Stack Overflow condition occur?",
        "answer": "(a) Only when available system memory is exhausted",
        "explanation": "Python lists are dynamically sized arrays. Therefore, a stack implemented using Python lists theoretically overflows only when the system runs out of physical memory (MemoryError).",
        "options": [
          "(a) Only when available system memory is exhausted",
          "(b) When 100 elements are inserted",
          "(c) When an empty stack is popped",
          "(d) Never, Python lists cannot overflow"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following expressions correctly tests whether a stack 'st' implemented as a list is empty?",
        "answer": "(a) len(st) == 0",
        "explanation": "For a standard Python list, testing whether len(st) == 0 (or simply 'not st') accurately checks if the stack is empty.",
        "options": [
          "(a) len(st) == 0",
          "(b) st == None",
          "(c) st.isEmpty()",
          "(d) st.top == 0"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "What will be the content of the stack after executing the following operations?\nst = []\nst.append(5)\nst.append(10)\nst.pop()\nst.append(15)\nst.append(20)\nst.pop()",
        "answer": "(a) [5, 15]",
        "explanation": "1. push 5 -> [5]\n2. push 10 -> [5, 10]\n3. pop() -> removes 10, leaving [5]\n4. push 15 -> [5, 15]\n5. push 20 -> [5, 15, 20]\n6. pop() -> removes 20, leaving [5, 15].",
        "options": [
          "(a) [5, 15]",
          "(b) [5, 10]",
          "(c) [15, 20]",
          "(d) [5]"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which real-world application relies heavily on a Stack data structure?",
        "answer": "(a) Undo/Redo mechanism in text editors",
        "explanation": "The Undo feature relies on a stack because the most recently executed operation must be reversed first (LIFO order). Print spooling and ticketing use FIFO queues.",
        "options": [
          "(a) Undo/Redo mechanism in text editors",
          "(b) Print spooling queue",
          "(c) CPU scheduling round-robin",
          "(d) First-come first-served ticketing"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which Python list method is used to remove and return the top element from a stack?",
        "answer": "(a) pop()",
        "explanation": "Calling list.pop() without arguments removes and returns the last element of the list, which represents the top of the stack.",
        "options": [
          "(a) pop()",
          "(b) remove()",
          "(c) delete()",
          "(d) drop()"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If the sequence of operations is: Push(A), Push(B), Pop(), Push(C), Push(D), Pop(), Pop(), what is the final state of the stack?",
        "answer": "(a) [A]",
        "explanation": "Push(A) -> [A]\nPush(B) -> [A, B]\nPop() -> pops B -> [A]\nPush(C) -> [A, C]\nPush(D) -> [A, C, D]\nPop() -> pops D -> [A, C]\nPop() -> pops C -> [A].",
        "options": [
          "(a) [A]",
          "(b) [A, B]",
          "(c) [C]",
          "(d) Empty"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In function call execution in programming languages, which data structure is used to maintain function call frames (activation records)?",
        "answer": "(a) Call Stack",
        "explanation": "The runtime system uses a Call Stack to track active function calls, returning to the most recent caller when a function completes (LIFO).",
        "options": [
          "(a) Call Stack",
          "(b) Queue",
          "(c) Linked List",
          "(d) Binary Tree"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is the time complexity of the Push and Pop operations in a stack implemented via a Python list?",
        "answer": "(a) O(1) amortized",
        "explanation": "Appending to and popping from the end of a Python list take constant O(1) amortized time.",
        "options": [
          "(a) O(1) amortized",
          "(b) O(n)",
          "(c) O(n²)",
          "(d) O(log n)"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "To display the elements of a stack from top to bottom, which range expression can be used on stack 'st'?",
        "answer": "(a) range(len(st) - 1, -1, -1)",
        "explanation": "The top element is at index len(st) - 1 and the bottom element is at index 0. Stepping backwards with -1 down to -1 (exclusive) correctly traverses from top to bottom.",
        "options": [
          "(a) range(len(st) - 1, -1, -1)",
          "(b) range(0, len(st))",
          "(c) range(len(st), 0, -1)",
          "(d) range(1, len(st) + 1)"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "What will be printed by the following code?\ndef Check(s):\n    if len(s) == 0:\n        return \"Underflow\"\n    return s.pop()\n\nStack = []\nprint(Check(Stack))",
        "answer": "(a) Underflow",
        "explanation": "Since Stack is empty (len == 0), the condition triggers and returns 'Underflow' before any pop is attempted.",
        "options": [
          "(a) Underflow",
          "(b) None",
          "(c) IndexError",
          "(d) Empty"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Converting an infix expression (A + B) * C into postfix results in:",
        "answer": "(a) A B + C *",
        "explanation": "Parenthesized (A + B) is converted first to AB+. Then (AB+) * C becomes AB+C*.",
        "options": [
          "(a) A B + C *",
          "(b) A B C + *",
          "(c) * + A B C",
          "(d) A B * C +"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Evaluating the postfix expression '10 5 + 2 *' gives:",
        "answer": "(a) 30",
        "explanation": "1. Push 10\n2. Push 5\n3. '+' -> pop 5, 10; compute 10 + 5 = 15; push 15\n4. Push 2\n5. '*' -> pop 2, 15; compute 15 * 2 = 30; push 30.\nFinal result = 30.",
        "options": [
          "(a) 30",
          "(b) 20",
          "(c) 25",
          "(d) 17"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following is NOT an application of a Stack?",
        "answer": "(a) Breadth First Search (BFS)",
        "explanation": "Breadth First Search (BFS) uses a Queue (FIFO) for graph traversal, whereas DFS uses a Stack (LIFO).",
        "options": [
          "(a) Breadth First Search (BFS)",
          "(b) Depth First Search (DFS)",
          "(c) Parentheses balancing",
          "(d) Expression evaluation"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is the result of popping from a stack of size 1?",
        "answer": "(a) The single element is returned and the stack becomes empty",
        "explanation": "Popping removes the sole element, returning it, and reducing the stack length from 1 to 0 (empty).",
        "options": [
          "(a) The single element is returned and the stack becomes empty",
          "(b) Underflow occurs",
          "(c) Stack remains size 1",
          "(d) Error"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In Python, if a stack is initialized as Stack = list(), its initial length is:",
        "answer": "(a) 0",
        "explanation": "list() creates an empty list with length 0.",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) -1",
          "(d) None"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "A linear data structure in which insertions and deletions can occur at either end is called a:",
        "answer": "(a) Deque",
        "explanation": "A Double-Ended Queue (Deque) permits insertion and deletion at both ends, unlike a Stack (one end only) or standard Queue.",
        "options": [
          "(a) Deque",
          "(b) Stack",
          "(c) Queue",
          "(d) Tree"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What will be the output of the following stack code?\nst = []\nfor i in [1, 2, 3, 4]:\n    st.append(i * 10)\nwhile len(st) > 2:\n    st.pop()\nprint(st)",
        "answer": "(a) [10, 20]",
        "explanation": "st becomes [10, 20, 30, 40]. While loop pops 40 (len becomes 3), then pops 30 (len becomes 2). Loop ends, leaving [10, 20].",
        "options": [
          "(a) [10, 20]",
          "(b) [30, 40]",
          "(c) [10, 20, 30]",
          "(d) []"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following functions checks whether an element can be pushed into a stack of fixed maximum capacity MAX?",
        "answer": "(a) len(st) < MAX",
        "explanation": "An element can only be pushed into a fixed-capacity stack if the current count is strictly less than the maximum limit (len(st) < MAX); otherwise, it is full (Overflow).",
        "options": [
          "(a) len(st) < MAX",
          "(b) len(st) == MAX",
          "(c) len(st) > MAX",
          "(d) len(st) == 0"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "To reverse a string 'HELLO' using a stack, in what order should the characters be popped?",
        "answer": "(a) O, L, L, E, H",
        "explanation": "Pushing H, then E, then L, L, O puts 'O' at the top. Popping characters successively yields 'O', 'L', 'L', 'E', 'H', reversing the string.",
        "options": [
          "(a) O, L, L, E, H",
          "(b) H, E, L, L, O",
          "(c) E, H, L, L, O",
          "(d) O, H, E, L, L"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): In a Python list-based stack, elements are added and removed from the end of the list.\nReason (R): Appending and popping from the end of a Python list are O(1) operations, which makes stack operations optimal.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Adding or removing from index 0 would require shifting all other elements (O(n)), whereas operating at the end is O(1) amortized, which is why the end is chosen as Top.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Trying to pop from an empty stack causes a Stack Underflow condition.\nReason (R): Stack underflow occurs when a stack exceeds its memory limit during a push operation.",
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is TRUE. Reason R is FALSE: Exceeding memory capacity during a push operation is called Stack Overflow, not underflow.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Stacks are classified as linear data structures.\nReason (R): In a stack, elements form a sequential order where each element (except first and last) has a unique predecessor and successor.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R defines what makes a data structure linear.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The Peek operation in a stack modifies the state of the stack.\nReason (R): Peek simply inspects the top element without removing or altering it.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because Peek is a read-only operation that does not change the stack. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Recursion in Python internally utilizes a call stack maintained by the interpreter.\nReason (R): Each recursive invocation pushes a new frame containing local variables onto the call stack, which is popped upon return.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains how recursive calls are managed internally via the call stack.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Write Push(Stk, item) and Pop(Stk) functions in Python to perform push and pop operations on a stack named Stk.",
        "answer": "Push and Pop functions for stack",
        "explanation": "Marking Scheme:\ndef Push(Stk, item):         # [1 Mark]\n    Stk.append(item)\n\ndef Pop(Stk):               # [1 Mark]\n    if len(Stk) == 0:\n        print(\"Stack Underflow\")\n        return None\n    return Stk.pop()"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Define the terms 'Overflow' and 'Underflow' with respect to stack data structures.",
        "answer": "Overflow vs Underflow definitions",
        "explanation": "1. Overflow [1 Mark]: Condition that occurs when an attempt is made to push an element into a stack that is already full (has reached its maximum fixed capacity).\n2. Underflow [1 Mark]: Condition that occurs when an attempt is made to pop or peek an element from an empty stack (containing zero elements)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Write a function PushEven(nums) in Python that takes a list of integers 'nums' and pushes all even numbers from 'nums' into a stack named EvenStack. If no even number is present, display an appropriate message.",
        "answer": "PushEven function implementation",
        "explanation": "Marking Scheme:\nEvenStack = []\ndef PushEven(nums):\n    for val in nums:                   # [1 Mark] loop\n        if val % 2 == 0:               # [1 Mark] condition check\n            EvenStack.append(val)      # [0.5 Mark] push\n    if len(EvenStack) == 0:            # [0.5 Mark] empty check\n        print(\"No even numbers found.\")"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Explain the Peek operation on a stack. Write a Python function Peek(stk) to return the top element of a stack without deleting it.",
        "answer": "Peek concept and implementation",
        "explanation": "1. Explanation [1 Mark]: Peek inspects and returns the element at the top of the stack without removing it from the stack.\n2. Implementation [1 Mark]:\ndef Peek(stk):\n    if len(stk) == 0:\n        print(\"Stack is empty\")\n        return None\n    return stk[-1]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "A list contains employee records: `[EmpID, Name, Salary]`. Write a function PushHighSal(EmpList) that pushes the name of all employees earning more than ₹50,000 onto a stack 'HighSalStk'.",
        "answer": "PushHighSal function implementation",
        "explanation": "Marking Scheme:\nHighSalStk = []\ndef PushHighSal(EmpList):\n    for emp in EmpList:                # [1 Mark] loop over employees\n        if emp[2] > 50000:             # [1 Mark] check salary\n            HighSalStk.append(emp[1])  # [1 Mark] push employee name"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Write a Python function PopAll(stk) that repeatedly pops and prints all elements from a stack until it becomes empty.",
        "answer": "PopAll function implementation",
        "explanation": "Marking Scheme:\ndef PopAll(stk):\n    if len(stk) == 0:                  # [0.5 Mark] initial underflow check\n        print(\"Stack is empty\")\n        return\n    while len(stk) > 0:                # [1 Mark] while loop\n        print(stk.pop(), end=\" \")      # [0.5 Mark] pop and print\n    print()"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write a function PushWords(sentence) in Python that takes a sentence and pushes all words starting with a vowel onto a stack named VowelWords. Display the stack content.",
        "answer": "PushWords function implementation",
        "explanation": "Marking Scheme:\nVowelWords = []\ndef PushWords(sentence):\n    words = sentence.split()           # [0.5 Mark]\n    vowels = ('a', 'e', 'i', 'o', 'u')\n    for w in words:                    # [0.5 Mark]\n        if w[0].lower() in vowels:     # [1 Mark]\n            VowelWords.append(w)       # [0.5 Mark]\n    print(\"Stack:\", VowelWords)        # [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "How does a stack differ from a queue in terms of insertion and deletion endpoints?",
        "answer": "Stack vs Queue endpoints",
        "explanation": "1. Stack [1 Mark]: Both insertion (push) and deletion (pop) happen at the SAME end, called the TOP (LIFO principle).\n2. Queue [1 Mark]: Insertion takes place at one end (REAR) and deletion takes place at the opposite end (FRONT) (FIFO principle)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Write a Python function DisplayStack(stk) to display all elements of a stack from top to bottom without removing any element from the stack.",
        "answer": "DisplayStack function implementation",
        "explanation": "Marking Scheme:\ndef DisplayStack(stk):\n    if len(stk) == 0:                  # [1 Mark] empty check\n        print(\"Stack is empty\")\n        return\n    print(\"Stack elements (Top to Bottom):\")\n    for i in range(len(stk) - 1, -1, -1):  # [1.5 Marks] reverse traversal\n        print(stk[i])                  # [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is the status of the stack pointer (Top) when a stack implemented using a Python list is empty?",
        "answer": "Stack pointer status",
        "explanation": "In an empty stack, the length of the list is 0 (len(stk) == 0), and conceptually the top index pointer is at -1. [2 Marks]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Write a complete menu-driven Python program to implement a Stack of books for a library. Each book record is a list containing `[BookNo, Title, Price]`. The program should support:\n(1) Push Book: adds a new book to the stack.\n(2) Pop Book: removes and displays the top book (or displays 'Stack Underflow').\n(3) Peek: displays the top book without removing it.\n(4) Display Stack: displays all books from top to bottom.\n(5) Exit.",
        "answer": "Complete menu-driven stack implementation for book management",
        "explanation": "Marking Scheme:\n# Stack implementation [4 Marks]:\nBookStack = []\n\ndef PushBook():\n    bno = int(input(\"Enter Book No: \"))\n    title = input(\"Enter Title: \")\n    price = float(input(\"Enter Price: \"))\n    BookStack.append([bno, title, price])\n    print(\"Book pushed successfully.\")\n\ndef PopBook():\n    if len(BookStack) == 0:\n        print(\"Stack Underflow! No books to remove.\")\n    else:\n        book = BookStack.pop()\n        print(f\"Popped Book: No: {book[0]}, Title: {book[1]}, Price: ₹{book[2]}\")\n\ndef PeekBook():\n    if len(BookStack) == 0:\n        print(\"Stack is empty.\")\n    else:\n        book = BookStack[-1]\n        print(f\"Top Book: No: {book[0]}, Title: {book[1]}, Price: ₹{book[2]}\")\n\ndef DisplayBooks():\n    if len(BookStack) == 0:\n        print(\"Stack is empty.\")\n    else:\n        print(\"Books in Stack (Top to Bottom):\")\n        for i in range(len(BookStack) - 1, -1, -1):\n            b = BookStack[i]\n            print(f\"[{b[0]}] {b[1]} - ₹{b[2]}\")\n\n# Menu Loop [1 Mark]:\nwhile True:\n    print(\"\\n1. Push  2. Pop  3. Peek  4. Display  5. Exit\")\n    ch = input(\"Enter choice (1-5): \")\n    if ch == '1': PushBook()\n    elif ch == '2': PopBook()\n    elif ch == '3': PeekBook()\n    elif ch == '4': DisplayBooks()\n    elif ch == '5': break\n    else: print(\"Invalid choice!\")"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "A dictionary contains customer details: `{'CustID': int, 'Name': str, 'City': str}`.\nWrite user-defined functions in Python to:\n(a) PushCustomers(CustomerList): Pushes the customer ID and Name as a tuple `(CustID, Name)` onto a stack 'DelhiStack' for all customers who belong to the city 'Delhi'.\n(b) PopCustomers(): Pops and displays all elements of DelhiStack until it is empty. If the stack is already empty, display 'Stack Underflow'.",
        "answer": "PushCustomers and PopCustomers stack functions",
        "explanation": "Marking Scheme:\nDelhiStack = []\n\n# (a) PushCustomers [2.5 Marks]:\ndef PushCustomers(CustomerList):\n    count = 0\n    for cust in CustomerList:\n        if cust['City'].strip().lower() == 'delhi':\n            DelhiStack.append((cust['CustID'], cust['Name']))\n            count += 1\n    print(f\"Pushed {count} Delhi customers onto stack.\")\n\n# (b) PopCustomers [2.5 Marks]:\ndef PopCustomers():\n    if len(DelhiStack) == 0:\n        print(\"Stack Underflow! No customers to pop.\")\n        return\n    print(\"Popping Delhi Customers:\")\n    while len(DelhiStack) > 0:\n        item = DelhiStack.pop()\n        print(f\"CustID: {item[0]}, Name: {item[1]}\")"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Write a Python function ReverseString(text) that uses a Stack data structure to reverse an input string and returns the reversed string. Trace the execution for text = \"PYTHON\".",
        "answer": "String reversal using stack with step-by-step tracing",
        "explanation": "Marking Scheme:\n1. Python Function [2.5 Marks]:\ndef ReverseString(text):\n    stack = []\n    # Push all characters onto stack\n    for ch in text:\n        stack.append(ch)\n    # Pop all characters to construct reversed string\n    rev_str = \"\"\n    while len(stack) > 0:\n        rev_str += stack.pop()\n    return rev_str\n\n2. Tracing for 'PYTHON' [2.5 Marks]:\n- Push phase:\n  Push 'P' -> ['P']\n  Push 'Y' -> ['P', 'Y']\n  Push 'T' -> ['P', 'Y', 'T']\n  Push 'H' -> ['P', 'Y', 'T', 'H']\n  Push 'O' -> ['P', 'Y', 'T', 'H', 'O']\n  Push 'N' -> ['P', 'Y', 'T', 'H', 'O', 'N'] (Top is 'N')\n- Pop phase:\n  Pop 'N' -> rev_str = \"N\"\n  Pop 'O' -> rev_str = \"NO\"\n  Pop 'H' -> rev_str = \"NOH\"\n  Pop 'T' -> rev_str = \"NOHT\"\n  Pop 'Y' -> rev_str = \"NOHTY\"\n  Pop 'P' -> rev_str = \"NOHTYP\"\nResult: \"NOHTYP\""
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: Browser History Navigation Stack\nA web browser maintains browsing history using a stack data structure to handle the 'Back' button action.\n- When a user visits a new URL, it is pushed onto the 'BackStack'.\n- When the user clicks 'Back', the current URL is pushed onto 'ForwardStack', and the previous URL is popped from 'BackStack'.\n(i) If a user visits: [\"google.com\", \"python.org\", \"cbse.nic.in\", \"wikipedia.org\"], what is the Top of the BackStack?\n(ii) Write a Python function Visit(url) to push a URL to BackStack.\n(iii) Write a Python function GoBack() that pops and returns the previous URL from BackStack.\n(iv) What happens if GoBack() is called when BackStack contains only one URL?",
        "answer": "Solutions to Browser History Stack Case Study",
        "explanation": "(i) Top of BackStack is \"wikipedia.org\". [1 Mark]\n(ii) Function Visit(url) [1 Mark]:\nBackStack = []\ndef Visit(url):\n    BackStack.append(url)\n(iii) Function GoBack() [1 Mark]:\ndef GoBack():\n    if len(BackStack) <= 1:\n        print(\"No previous page available.\")\n        return None\n    return BackStack.pop()\n(iv) If only 1 URL is present, there is no prior webpage to navigate back to; attempting to pop would leave the browser with no active page (or trigger underflow if popped again). [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Write user-defined functions in Python to:\n(a) PushPackage(packages): Pushes package codes onto a stack 'HeavyStack' for all packages weighing more than 15 kg from a nested list `[[pkg_code, weight, destination], ...] `.\n(b) PopPackage(): Pops and displays all packages from HeavyStack until it is empty.",
        "answer": "Package dispatch stack functions",
        "explanation": "Marking Scheme:\nHeavyStack = []\n\n# (a) PushPackage [2.5 Marks]:\ndef PushPackage(packages):\n    count = 0\n    for pkg in packages:\n        if pkg[1] > 15:  # weight > 15 kg\n            HeavyStack.append(pkg[0])\n            count += 1\n    print(f\"Pushed {count} heavy packages onto stack.\")\n\n# (b) PopPackage [2.5 Marks]:\ndef PopPackage():\n    if len(HeavyStack) == 0:\n        print(\"Stack Underflow! No packages to dispatch.\")\n        return\n    print(\"Dispatching Heavy Packages (LIFO):\")\n    while len(HeavyStack) > 0:\n        code = HeavyStack.pop()\n        print(\"Dispatching Package Code:\", code)"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Write a Python function EvaluatePostfix(expression) that takes a postfix string of single-digit numbers and operators (+, -, *, /) separated by spaces, and evaluates it using a stack.",
        "answer": "Postfix expression evaluation function",
        "explanation": "Marking Scheme:\n1. Function header and initialization [1.5 Marks]:\ndef EvaluatePostfix(expression):\n    stack = []\n    tokens = expression.split()\n\n2. Scan tokens and evaluate [2.5 Marks]:\n    for token in tokens:\n        if token.isdigit():\n            stack.append(int(token))\n        elif token in '+-*/':\n            op2 = stack.pop()  # second operand\n            op1 = stack.pop()  # first operand\n            if token == '+': res = op1 + op2\n            elif token == '-': res = op1 - op2\n            elif token == '*': res = op1 * op2\n            elif token == '/': res = op1 // op2\n            stack.append(res)\n\n3. Return result [1 Mark]:\n    return stack.pop()\n\nprint(\"Result:\", EvaluatePostfix(\"5 3 + 2 *\"))  # Outputs: 16"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Write a Python function CheckParentheses(expr) that uses a stack to verify whether all opening brackets '(', '{', '[' have corresponding closing brackets ')', '}', ']' in the correct order.",
        "answer": "Parentheses balancing function using stack",
        "explanation": "Marking Scheme:\n1. Function header and stack setup [1 Mark]:\ndef CheckParentheses(expr):\n    stack = []\n    matching = {')': '(', '}': '{', ']': '['}\n\n2. Iteration and balance check [2 Marks]:\n    for ch in expr:\n        if ch in \"({[\":\n            stack.append(ch)\n        elif ch in \")}]\":\n            if len(stack) == 0 or stack.pop() != matching[ch]:\n                return False\n\n3. Final verification [1 Mark]:\n    return len(stack) == 0\n\nprint(CheckParentheses(\"{[a + b] * (c + d)}\"))  # True\nprint(CheckParentheses(\"([a + b)]\"))            # False"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Explain why a stack is called a Last-In-First-Out (LIFO) list.\n(b) Write a Python program with functions PushScore(scores) and PopScore() to maintain a stack of cricket scores greater than or equal to 50.",
        "answer": "(a) LIFO explanation; (b) Cricket scores stack program",
        "explanation": "Marking Scheme:\n(a) LIFO Explanation (2 Marks):\n- In a stack, insertion and deletion are restricted to a single endpoint called Top. As a result, the element that was inserted most recently is positioned at the top and will be the first one accessed or removed, while the earliest inserted element remains at the bottom until all subsequent elements are removed. [2 Marks]\n\n(b) Cricket Scores Program (3 Marks):\nScoreStack = []\ndef PushScore(scores):\n    for s in scores:\n        if s >= 50:\n            ScoreStack.append(s)\n    print(\"Half-centuries and centuries pushed.\")\n\ndef PopScore():\n    if not ScoreStack:\n        print(\"Stack Underflow\")\n        return\n    while ScoreStack:\n        print(\"Popped Score:\", ScoreStack.pop())\n\nPushScore([45, 82, 12, 104, 50, 39])\nPopScore()"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write a Python function FilterWords(words_list) that pushes all words having length exactly 4 into a stack 'FourLetterStack'. Then pop and display each word from the stack.",
        "answer": "Four-letter words stack filter and display function",
        "explanation": "Marking Scheme:\nFourLetterStack = []\ndef FilterWords(words_list):\n    # 1. Push qualifying words [2 Marks]\n    for w in words_list:\n        if len(w) == 4:\n            FourLetterStack.append(w)\n \n    # 2. Pop and display [2 Marks]\n    if len(FourLetterStack) == 0:\n        print(\"No 4-letter words found.\")\n        return\n    print(\"Popped 4-letter words (LIFO):\")\n    while len(FourLetterStack) > 0:\n        print(FourLetterStack.pop())"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Differentiate between linear and non-linear data structures with examples.\n(b) Write a Python function PopUntil(stk, target) that pops elements from a stack until the target value is found and popped, or the stack becomes empty.",
        "answer": "(a) Linear vs Non-linear data structures; (b) PopUntil function",
        "explanation": "Marking Scheme:\n(a) Linear vs Non-linear Data Structures (2.5 Marks):\n- Linear Data Structures: Elements are organized sequentially in a linear order, where each element has an immediate predecessor and successor (e.g. Lists, Stacks, Queues). [1.25 Marks]\n- Non-linear Data Structures: Elements are arranged hierarchically or interconnected arbitrarily without sequential order (e.g. Trees, Graphs). [1.25 Marks]\n\n(b) PopUntil Function (2.5 Marks):\ndef PopUntil(stk, target):\n    if len(stk) == 0:\n        print(\"Stack is empty.\")\n        return\n    found = False\n    while len(stk) > 0:\n        val = stk.pop()\n        print(\"Popped:\", val)\n        if val == target:\n            print(f\"Target '{target}' reached and popped.\")\n            found = True\n            break\n    if not found:\n        print(f\"Target '{target}' was not present in the stack.\")"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "unit_num": 2,
      "title": "Computer Networks - Media, Devices, and Topologies",
      "unit_title": "Unit II: Computer Networks",
      "weightage_unit": "10 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which transmission medium transmits data in the form of light pulses and is completely immune to electromagnetic interference (EMI)?",
        "answer": "(a) Optical Fiber Cable",
        "explanation": "Optical fiber cables transmit signals as pulses of light through thin glass/plastic fibers using total internal reflection. Because they do not carry electrical currents, they are completely immune to electromagnetic interference and provide extremely high bandwidth.",
        "options": [
          "(a) Optical Fiber Cable",
          "(b) Coaxial Cable",
          "(c) Shielded Twisted Pair (STP)",
          "(d) Unshielded Twisted Pair (UTP)"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which network device regenerates and amplifies a signal so it can travel longer distances without degradation?",
        "answer": "(a) Repeater",
        "explanation": "A repeater operates at the physical layer to receive a weakened or distorted incoming signal, clean and regenerate it to its original strength, and retransmit it over extended distances.",
        "options": [
          "(a) Repeater",
          "(b) Hub",
          "(c) Gateway",
          "(d) Modem"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In which network topology are all computers connected to a central device such as a hub or switch?",
        "answer": "(a) Star Topology",
        "explanation": "In a star topology, each network host is connected to a central hub or switch via a dedicated point-to-point cable. If a single cable fails, only that node is disconnected.",
        "options": [
          "(a) Star Topology",
          "(b) Bus Topology",
          "(c) Ring Topology",
          "(d) Mesh Topology"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What was the name of the first computer network developed by the US Department of Defense?",
        "answer": "(a) ARPANET",
        "explanation": "ARPANET (Advanced Research Projects Agency Network), launched in 1969 by the US Department of Defense, was the world's first operational packet-switching network and the predecessor of the modern Internet.",
        "options": [
          "(a) ARPANET",
          "(b) NSFNET",
          "(c) INTERNET",
          "(d) INTRANET"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which device connects two dissimilar networks that use different communication protocols?",
        "answer": "(a) Gateway",
        "explanation": "A gateway acts as a protocol converter, translating data formats and network protocols between two dissimilar networks operating on different communication architectures.",
        "options": [
          "(a) Gateway",
          "(b) Switch",
          "(c) Bridge",
          "(d) Repeater"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What is the maximum effective distance for connecting computers via twisted pair cable without requiring a repeater?",
        "answer": "(a) 100 meters",
        "explanation": "Standard twisted pair (UTP/STP Cat5/Cat6) cables can reliably transmit signals up to 100 meters (approx. 328 feet). Distances beyond 100 m require a repeater or switch to prevent signal attenuation.",
        "options": [
          "(a) 100 meters",
          "(b) 500 meters",
          "(c) 1 kilometer",
          "(d) 10 meters"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "A network covering an entire metropolitan city, such as a city-wide cable television network, is an example of a:",
        "answer": "(a) MAN (Metropolitan Area Network)",
        "explanation": "A Metropolitan Area Network (MAN) spans a geographical area larger than a LAN but smaller than a WAN, typically covering a town or city (up to 50 km).",
        "options": [
          "(a) MAN (Metropolitan Area Network)",
          "(b) LAN (Local Area Network)",
          "(c) PAN (Personal Area Network)",
          "(d) WAN (Wide Area Network)"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following wireless communication media requires a strict, unobstructed line-of-sight between transmitter and receiver?",
        "answer": "(a) Infrared",
        "explanation": "Infrared communication uses high-frequency light waves that cannot penetrate physical walls or solid obstacles, requiring a direct, unobstructed line of sight (e.g. TV remote controls).",
        "options": [
          "(a) Infrared",
          "(b) Radio waves",
          "(c) Satellite",
          "(d) Cellular"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "What type of connector is standardly used to connect twisted pair cables to a computer's Network Interface Card (NIC)?",
        "answer": "(a) RJ-45",
        "explanation": "An RJ-45 (Registered Jack 45) connector is an 8-pin modular connector standardly used for Ethernet networking over twisted pair cabling.",
        "options": [
          "(a) RJ-45",
          "(b) RJ-11",
          "(c) BNC",
          "(d) USB-C"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which device is primarily used to forward data packets across different computer networks using logical IP addresses?",
        "answer": "(a) Router",
        "explanation": "A router operates at the Network layer (Layer 3) to inspect IP destination addresses and determine the optimal path for forwarding data packets across interconnected networks.",
        "options": [
          "(a) Router",
          "(b) Hub",
          "(c) Bridge",
          "(d) Repeater"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The physical hardware address permanently assigned to a Network Interface Card (NIC) by its manufacturer is known as the:",
        "answer": "(a) MAC Address",
        "explanation": "A MAC (Media Access Control) address is a unique 48-bit (6-byte) physical hardware identifier burnt permanently into the ROM of a network card.",
        "options": [
          "(a) MAC Address",
          "(b) IP Address",
          "(c) URL",
          "(d) Port Number"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which network topology features a single central communication backbone cable to which all nodes are connected?",
        "answer": "(a) Bus Topology",
        "explanation": "In a bus topology, all devices are connected directly to a single shared central cable called the backbone or trunk, terminated at both ends by terminators.",
        "options": [
          "(a) Bus Topology",
          "(b) Star Topology",
          "(c) Tree Topology",
          "(d) Ring Topology"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the primary difference between a network Hub and a network Switch?",
        "answer": "(a) A hub broadcasts incoming packets to all ports, whereas a switch directs packets only to the intended destination port",
        "explanation": "A hub is a passive/broadcast device that retransmits incoming signals to all connected ports indiscriminately. A switch maintains a MAC address table and forwards frames intelligently only to the specific recipient port.",
        "options": [
          "(a) A hub broadcasts incoming packets to all ports, whereas a switch directs packets only to the intended destination port",
          "(b) A hub is wireless, while a switch is wired",
          "(c) A switch operates at the physical layer, while a hub operates at the transport layer",
          "(d) A hub connects dissimilar networks, while a switch connects identical networks"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The range of frequencies contained within a communication band, measured in Hertz (Hz), is called:",
        "answer": "(a) Bandwidth",
        "explanation": "Bandwidth is the difference between the highest and lowest frequencies of a transmission channel, measured in Hertz (Hz), representing the data-carrying capacity.",
        "options": [
          "(a) Bandwidth",
          "(b) Baud rate",
          "(c) Data transfer rate",
          "(d) Throughput"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following is an example of a Personal Area Network (PAN)?",
        "answer": "(a) Transferring photos between a smartphone and a laptop via Bluetooth",
        "explanation": "A Personal Area Network (PAN) is organized around an individual person within a small personal workspace (typically up to 10 meters) using technologies like Bluetooth.",
        "options": [
          "(a) Transferring photos between a smartphone and a laptop via Bluetooth",
          "(b) Connecting all computers in a school computer lab",
          "(c) Connecting ATMs across a state",
          "(d) Connecting two university campuses across a city"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Modem stands for:",
        "answer": "(a) Modulator - Demodulator",
        "explanation": "Modem stands for Modulator-Demodulator. It converts digital signals from a computer into analog signals for transmission over telephone/cable lines, and vice versa.",
        "options": [
          "(a) Modulator - Demodulator",
          "(b) Modern Demodulator",
          "(c) Mobile Device Manager",
          "(d) Modulation Mechanism"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following topologies is considered most fault-tolerant because every node has a direct connection to every other node?",
        "answer": "(a) Mesh Topology",
        "explanation": "In a full mesh topology, every node has dedicated point-to-point links to every other node, providing maximum redundancy, reliability, and fault tolerance.",
        "options": [
          "(a) Mesh Topology",
          "(b) Star Topology",
          "(c) Bus Topology",
          "(d) Tree Topology"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "A device used to connect two similar network segments operating on the same protocol at the Data Link layer is a:",
        "answer": "(a) Bridge",
        "explanation": "A bridge connects two separate local area network segments that use identical protocols, filtering traffic based on MAC addresses to reduce network congestion.",
        "options": [
          "(a) Bridge",
          "(b) Gateway",
          "(c) Modem",
          "(d) Multiplexer"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which transmission medium is commonly used for satellite communication and cellular telephone transmissions?",
        "answer": "(a) Microwaves and Radio waves",
        "explanation": "Microwaves (and radio waves) are widely used for long-distance wireless communications, cellular mobile telephone signals, and satellite uplinks/downlinks.",
        "options": [
          "(a) Microwaves and Radio waves",
          "(b) Infrared",
          "(c) Coaxial cable",
          "(d) Laser light"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The rate at which data is transferred across a network is typically measured in:",
        "answer": "(a) bps (bits per second)",
        "explanation": "Data transfer rate (bit rate) is measured in bits per second (bps), or multiples such as Kbps, Mbps, and Gbps.",
        "options": [
          "(a) bps (bits per second)",
          "(b) Hertz",
          "(c) Volts",
          "(d) Bytes only"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which cable consists of an inner solid copper conductor surrounded by a dielectric insulator, a woven metallic shield, and an outer jacket?",
        "answer": "(a) Coaxial Cable",
        "explanation": "Coaxial cable has a central core conductor surrounded by an insulating layer, metallic foil/braid shield, and outer protective jacket (widely used in cable TV networks).",
        "options": [
          "(a) Coaxial Cable",
          "(b) Optical Fiber Cable",
          "(c) Twisted Pair Cable",
          "(d) Ribbon Cable"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "In 80-20 rule for network server placement, the server should ideally be placed in the building that:",
        "answer": "(a) Has the maximum number of computers",
        "explanation": "Under the 80-20 networking rule (80% of traffic remains local, 20% travels across the backbone), placing the server in the building with the largest number of computers minimizes backbone network traffic.",
        "options": [
          "(a) Has the maximum number of computers",
          "(b) Is in the exact geographical center",
          "(c) Has the fewest computers",
          "(d) Contains the main entrance"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the primary function of a network terminator in a bus topology?",
        "answer": "(a) To absorb signals and prevent signal reflection (echo)",
        "explanation": "Terminators placed at both ends of a bus backbone absorb electrical signals when they reach the cable ends, preventing them from bouncing back and corrupting other data packets.",
        "options": [
          "(a) To absorb signals and prevent signal reflection (echo)",
          "(b) To amplify weak signals",
          "(c) To connect peripheral devices",
          "(d) To assign IP addresses"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following devices is also known as an 'Intelligent Hub'?",
        "answer": "(a) Switch",
        "explanation": "A switch is often referred to as an intelligent hub because it learns the MAC addresses of connected devices and forwards packets selectively rather than broadcasting.",
        "options": [
          "(a) Switch",
          "(b) Router",
          "(c) Gateway",
          "(d) Repeater"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which communication channel allows data transmission in both directions simultaneously?",
        "answer": "(a) Full-duplex",
        "explanation": "Full-duplex mode enables simultaneous two-way data transmission (like a telephone conversation), whereas half-duplex allows two-way transmission but only one direction at a time (like a walkie-talkie).",
        "options": [
          "(a) Full-duplex",
          "(b) Half-duplex",
          "(c) Simplex",
          "(d) Multi-simplex"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Optical fiber cables are ideal for connecting campus buildings requiring ultra-high-speed data transfer.\nReason (R): Optical fiber cables use light pulses to transmit data, providing immense bandwidth and immunity to electromagnetic noise.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R gives the technical rationale for why optical fiber cables are chosen as campus network backbones.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): In a star topology, if the central switch fails, the entire network shuts down.\nReason (R): In a star topology, all communication between network devices must pass through the central device.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why the central hub/switch represents a single point of total network failure.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): A repeater should be installed in a cable link whenever the distance between two network blocks exceeds 100 meters.\nReason (R): Electrical signals in copper cables suffer attenuation (weakening) over long distances and require amplification.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains the physical principle of signal attenuation necessitating repeaters.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A hub is an intelligent network device that filters data frames based on MAC addresses.\nReason (R): A switch maintains a dynamic MAC address table to forward frames directly to specific destination ports.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because a hub is an unintelligent broadcast device that lacks MAC filtering capability. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Microwave transmission is suitable for connecting branch offices separated by hilly terrain.\nReason (R): Microwave towers communicate via line-of-sight and avoid the high costs and physical challenges of laying underground cables in rugged terrain.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why microwave/radio transmission is preferred in difficult geographic terrains.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Differentiate between a Hub and a Switch. Mention one key advantage of a Switch over a Hub.",
        "answer": "Hub vs Switch comparison",
        "explanation": "1. Difference [1 Mark]:\n- Hub: A physical layer device that broadcasts incoming data packets to all connected ports indiscriminately, creating collision domains.\n- Switch: A data link layer device that forwards data packets selectively only to the intended recipient port based on MAC addresses.\n2. Key Advantage [1 Mark]: A switch reduces network congestion and packet collisions, providing higher overall bandwidth and enhanced security."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Give two advantages and two disadvantages of Star topology.",
        "answer": "Advantages and disadvantages of Star topology",
        "explanation": "1. Advantages [1 Mark]:\n- Easy to install, configure, and add new nodes without disrupting existing connections.\n- Fault isolation: If one workstation cable fails, only that computer is affected; the rest of the network functions normally.\n2. Disadvantages [1 Mark]:\n- Single point of failure: If the central hub/switch fails, the entire network goes down.\n- Requires more cabling compared to bus topology, leading to higher installation cost."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Compare Twisted Pair Cable, Coaxial Cable, and Optical Fiber Cable on the basis of:\n(i) Data transfer speed\n(ii) Cost of installation\n(iii) Immunity to Electromagnetic Interference (EMI).",
        "answer": "Comparison of transmission media",
        "explanation": "1. Data transfer speed [1 Mark]:\n- Twisted Pair: Moderate (10 Mbps to 1 Gbps/10 Gbps depending on Category).\n- Coaxial Cable: Moderate to High (10 Mbps to 100 Mbps).\n- Optical Fiber: Extremely high (10 Gbps to 100+ Gbps).\n2. Cost of installation [1 Mark]:\n- Twisted Pair: Least expensive and easiest to install.\n- Coaxial Cable: Moderately expensive.\n- Optical Fiber: Most expensive cable and specialized installation equipment/skills needed.\n3. Immunity to EMI [1 Mark]:\n- Twisted Pair: Low to moderate (STP has better shielding than UTP).\n- Coaxial Cable: Good shielding against electrical interference.\n- Optical Fiber: Completely immune to EMI as it transmits light rather than electrical current."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "What is the function of a Gateway in a computer network? How does it differ from a Router?",
        "answer": "Gateway function and difference from Router",
        "explanation": "1. Function of Gateway [1 Mark]: A gateway is a network node that translates data formats and protocols between two dissimilar networks operating on different architectures (e.g. connecting a proprietary mainframe network to TCP/IP).\n2. Difference from Router [1 Mark]: A router routes packets between networks using the same protocol stack (like IP) based on IP routing tables, whereas a gateway performs protocol conversion across different protocol stacks."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Explain the following terms:\n(i) Bandwidth\n(ii) Baud\n(iii) MAC Address.",
        "answer": "Explanation of networking terms",
        "explanation": "(i) Bandwidth [1 Mark]: The range of frequencies available for transmission on a channel, measured in Hertz (Hz), or the maximum data transmission capacity of a network channel.\n(ii) Baud [1 Mark]: The unit of data transmission signaling speed, representing the number of signal changes (symbols) per second.\n(iii) MAC Address [1 Mark]: Media Access Control address, a unique 12-digit hexadecimal physical hardware address (e.g. 00:1A:2B:3C:4D:5E) burned into the NIC by the manufacturer."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is a Repeater? When is it necessary to install a repeater in a network?",
        "answer": "Repeater definition and necessity",
        "explanation": "1. Definition [1 Mark]: A repeater is a physical layer device that regenerates, reshapes, and amplifies electrical or optical signals that have attenuated over transmission media.\n2. When necessary [1 Mark]: It is necessary when the physical distance between two interconnected nodes or buildings exceeds the maximum rated cable length (e.g., > 100 meters for UTP cabling) to prevent data loss."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Differentiate between LAN, MAN, and WAN based on geographical span, data transfer rate, and ownership.",
        "answer": "LAN vs MAN vs WAN comparison",
        "explanation": "1. Geographical Span [1 Mark]:\n- LAN: Small area (a single room, building, or campus up to 1-2 km).\n- MAN: Moderate area (a city or town up to 50 km).\n- WAN: Vast area (across countries, continents, or the entire globe).\n2. Data Transfer Rate [1 Mark]:\n- LAN: Very high (100 Mbps to 10 Gbps).\n- MAN: Moderate to high (up to 100 Mbps).\n- WAN: Variable / lower due to long distances and shared public infrastructure.\n3. Ownership [1 Mark]:\n- LAN: Usually privately owned by a single organization.\n- MAN: Owned by a consortium or private/public service provider.\n- WAN: Multiple public and private telecommunications providers."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Explain the role of a Modem in establishing an Internet connection.",
        "answer": "Role of Modem",
        "explanation": "A modem (Modulator-Demodulator) converts a computer's digital signals into analog signals suitable for transmission over analog telephone wires or cable TV lines (modulation), and conversely converts incoming analog signals back into digital data for the computer (demodulation). [2 Marks]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Explain Bus Topology with the help of a labeled diagram. State one major disadvantage of Bus topology.",
        "answer": "Bus topology description and disadvantage",
        "explanation": "1. Description [1.5 Marks]: In a Bus topology, all workstations, servers, and printers are connected in a linear line to a single central transmission cable (the backbone). Both ends of the backbone must have terminators to absorb signals.\n2. Diagram concept [0.5 Mark]: Node 1 -- Node 2 -- [Backbone Cable] -- Node 3 -- Terminator\n3. Disadvantage [1 Mark]: If the main backbone cable breaks or fails at any point, the entire network shuts down (single point of failure)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is an RJ-45 connector? Where is it used?",
        "answer": "RJ-45 connector definition and usage",
        "explanation": "1. Definition [1 Mark]: RJ-45 (Registered Jack-45) is an 8-wire, 8-contact standardized physical connector.\n2. Usage [1 Mark]: It is used on the ends of Category 5/6 twisted pair Ethernet cables to connect computers to network switches, routers, and wall jacks."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "A global tech company \"Innovatech Ltd\" is setting up its new campus in Bengaluru. The campus has 4 blocks: Admin Block, Tech Block, HR Block, and Finance Block.\n\nDistances between blocks:\n- Admin to Tech: 60 m\n- Admin to HR: 120 m\n- Admin to Finance: 90 m\n- Tech to HR: 80 m\n- Tech to Finance: 150 m\n- HR to Finance: 70 m\n\nNumber of computers in each block:\n- Admin: 30\n- Tech: 150\n- HR: 25\n- Finance: 45\n\nAnswer the following questions:\n(a) Suggest the most suitable block to host the main SERVER with justification.\n(b) Suggest the best cable layout / topology for connecting all 4 blocks.\n(c) Suggest the placement of a REPEATER and SWITCH/HUB with justification.\n(d) Which wired transmission medium should be used for connecting the blocks for high-speed connectivity?\n(e) The company wants to link its Bengaluru campus with its head office in London. Which communication media should be suggested?",
        "answer": "Solutions to Innovatech Ltd Campus Networking Case Study",
        "explanation": "Marking Scheme:\n(a) Server Placement [1 Mark]:\n- Block: Tech Block.\n- Justification: According to the 80-20 rule of networking, the server should be placed in the block containing the maximum number of computers (Tech Block has 150 computers), minimizing traffic on the inter-block backbone.\n\n(b) Cable Layout / Topology [1 Mark]:\n- Layout: Star Topology connecting Tech Block directly to Admin (60 m), HR (80 m), and Finance (150 m).\n(Alternatively: Bus layout Tech - Admin - Finance - HR).\n\n(c) Placement of Devices [1 Mark]:\n- Switch/Hub: In every block (Admin, Tech, HR, Finance) to connect the individual computers within that block.\n- Repeater: Between Tech Block and Finance Block, because the distance is 150 m, which exceeds the 100 m limit for twisted pair cable.\n\n(d) Wired Transmission Medium [1 Mark]:\n- Optical Fiber Cable (or Cat6 UTP cable for links < 100 m; Optical Fiber recommended for highest speed and future scalability).\n\n(e) Connecting Bengaluru to London [1 Mark]:\n- Satellite Communication (or Transoceanic Submarine Optical Fiber Cable / Internet over WAN)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Vidya University is establishing a network across its 4 wings: Science Wing, Arts Wing, Commerce Wing, and Admin Wing.\n\nDistance between wings:\n- Science to Arts: 40 m\n- Science to Commerce: 110 m\n- Science to Admin: 75 m\n- Arts to Commerce: 85 m\n- Arts to Admin: 130 m\n- Commerce to Admin: 60 m\n\nNumber of Computers:\n- Science Wing: 120\n- Arts Wing: 40\n- Commerce Wing: 35\n- Admin Wing: 20\n\n(a) Suggest the most appropriate wing to house the server.\n(b) Draw/suggest the most cost-effective cable layout.\n(c) Suggest the placement of Switch/Hub and Repeater.\n(d) Suggest a wireless transmission medium to link a newly built sports complex 2 km away from the main campus.\n(e) Which device is needed if the university network needs to connect to the external public Internet?",
        "answer": "Solutions to Vidya University Networking Case Study",
        "explanation": "Marking Scheme:\n(a) Server Placement [1 Mark]:\n- Science Wing, because it has the maximum number of computers (120 computers), reducing backbone load.\n\n(b) Cost-Effective Cable Layout [1 Mark]:\n- Minimal spanning tree: Science to Arts (40 m) + Commerce to Admin (60 m) + Science to Admin (75 m) = Total 175 m.\n(Or Star topology centered at Science Wing).\n\n(c) Placement of Network Devices [1 Mark]:\n- Switch/Hub: In all 4 wings to connect local computers.\n- Repeater: Between Science and Commerce (110 m) if connected directly, because distance exceeds 100 m.\n\n(d) Wireless Medium for 2 km [1 Mark]:\n- Radio waves / Wi-Fi outdoor directional antennas (or Microwave communication).\n\n(e) Internet Connection Device [1 Mark]:\n- Router (or Gateway / Modem)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain the working of Tree Topology with an example.\n(b) Differentiate between packet switching and circuit switching.\n(c) What is the function of a Network Interface Card (NIC)?",
        "answer": "(a) Tree topology; (b) Packet vs circuit switching; (c) NIC function",
        "explanation": "Marking Scheme:\n(a) Tree Topology (2 Marks):\n- Tree topology is a hierarchical combination of star and bus topologies. Groups of star-configured networks are connected to a central bus backbone cable. [1 Mark]\n- It is easily expandable and scalable, but if the main backbone cable fails, the entire network fails. [1 Mark]\n\n(b) Packet Switching vs Circuit Switching (2 Marks):\n- Circuit Switching: A dedicated, continuous physical communication path is established between sender and receiver for the entire duration of the session (e.g. traditional landline telephone network). [1 Mark]\n- Packet Switching: Data is broken down into small packets that travel independently across various routes and are reassembled at the destination (e.g. the Internet). [1 Mark]\n\n(c) Function of NIC (1 Mark):\n- A hardware component installed in a computer that allows it to physically connect to a network medium and translates parallel data from the computer bus into serial data for the network."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: Hospital Multi-Speciality Network Setup\nMedicare Hospital has 3 buildings in its complex: OPD Block, Surgical Block, and Diagnostic Block.\n- OPD to Surgical: 45 m\n- Surgical to Diagnostic: 95 m\n- OPD to Diagnostic: 135 m\nNumber of computers:\n- OPD: 80\n- Surgical: 50\n- Diagnostic: 30\n(i) Where should the central database server be housed?\n(ii) Suggest the cable layout using Star topology.\n(iii) Where is a repeater required if OPD is connected directly to Diagnostic Block?\n(iv) Which communication technology should be used to securely connect doctors' mobile tablets within the hospital?",
        "answer": "Solutions to Hospital Networking Case Study",
        "explanation": "(i) Server in OPD Block, because it has the maximum number of computers (80). [1 Mark]\n(ii) Star layout: OPD connected directly to Surgical Block (45 m) and OPD connected to Diagnostic Block (135 m). [1 Mark]\n(iii) A repeater is required along the cable between OPD and Diagnostic Block because the distance (135 m) exceeds 100 m. [1 Mark]\n(iv) Secure Wi-Fi (WPA3-enterprise encrypted wireless LAN with internal Access Points). [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Zenith Financial Services is planning a network infrastructure connecting its 4 departments: Accounts, Legal, Trading, and Customer Care.\n\nDistances:\n- Accounts to Legal: 55 m\n- Accounts to Trading: 30 m\n- Accounts to Customer Care: 115 m\n- Legal to Trading: 70 m\n- Legal to Customer Care: 80 m\n- Trading to Customer Care: 140 m\n\nNumber of Computers:\n- Accounts: 40\n- Legal: 20\n- Trading: 180\n- Customer Care: 60\n\n(a) Identify the department most suitable for hosting the Server.\n(b) Suggest the most economical cable layout.\n(c) Suggest device requirements (Switch, Repeater) with locations.\n(d) The company wants to ensure that data communication between Trading and Accounts is immune to electrical noise from trading floor machines. Which cable type should be used?\n(e) Which wireless service is best to connect field agents located within a 5 km radius in the city?",
        "answer": "Solutions to Zenith Financial Services Networking Case Study",
        "explanation": "Marking Scheme:\n(a) Server Location [1 Mark]:\n- Trading Department, because it has the maximum computers (180), minimizing network traffic.\n\n(b) Economical Cable Layout [1 Mark]:\n- Trading to Accounts (30 m) + Accounts to Legal (55 m) + Legal to Customer Care (80 m) = Total 165 m.\n\n(c) Hardware Devices [1 Mark]:\n- Switch/Hub: Installed in each of the 4 departments.\n- Repeater: If Trading connects directly to Customer Care (140 m) or Accounts to Customer Care (115 m), a repeater is needed.\n\n(d) Noise-Immune Cable [1 Mark]:\n- Optical Fiber Cable (or Shielded Twisted Pair - STP).\n\n(e) Wireless Medium within 5 km City Radius [1 Mark]:\n- MAN broadband wireless / WiMAX / Cellular 4G/5G data network."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) What is a Computer Network? List two major goals/benefits of networking.\n(b) Differentiate between Guided and Unguided transmission media with two examples of each.\n(c) Explain what is meant by MAC address and IP address.",
        "answer": "(a) Network definition & goals; (b) Guided vs unguided; (c) MAC vs IP address",
        "explanation": "Marking Scheme:\n(a) Computer Network & Benefits (1.5 Marks):\n- Definition: An interconnected collection of autonomous computers capable of exchanging data and sharing resources. [0.5 Mark]\n- Benefits: Resource sharing (printers, storage), centralized data management, and rapid communication. [1 Mark]\n\n(b) Guided vs Unguided Media (2 Marks):\n- Guided Media: Signals are directed and confined through a physical solid medium (cables). Examples: Twisted Pair, Optical Fiber. [1 Mark]\n- Unguided Media: Signals propagate freely through air/vacuum using electromagnetic waves. Examples: Radio waves, Infrared. [1 Mark]\n\n(c) MAC vs IP Address (1.5 Marks):\n- MAC Address: 48-bit permanent physical address of NIC burned into ROM. [0.75 Mark]\n- IP Address: 32-bit (IPv4) or 128-bit (IPv6) logical network address assigned to a device on a TCP/IP network. [0.75 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Explain the characteristics of Satellite Communication. Mention two advantages and two limitations.",
        "answer": "Satellite communication analysis",
        "explanation": "Marking Scheme:\n1. Characteristics [1.5 Marks]:\nSatellites in geostationary orbit (approx. 36,000 km above equator) receive microwave signals from ground stations (uplink), amplify and shift the frequency via transponders, and broadcast them back to ground stations (downlink).\n\n2. Advantages [1.5 Marks]:\n- Vast coverage area: A single satellite can cover an entire continent or one-third of the globe.\n- Ideal for remote, rural, or maritime locations where laying cables is impossible.\n\n3. Limitations [1 Mark]:\n- High propagation delay (latency) due to the long distance traveled by signals.\n- Susceptible to atmospheric disturbances (rain fade) and extremely high launch/maintenance costs."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Explain Mesh Topology. If there are n computers in a fully connected mesh network, how many physical links are required?\n(b) Why is a switch preferred over a hub in high-traffic enterprise networks?",
        "answer": "(a) Mesh topology & link formula n(n-1)/2; (b) Switch preference rationale",
        "explanation": "Marking Scheme:\n(a) Mesh Topology (3 Marks):\n- In a mesh topology, every node has a dedicated point-to-point link to every other node. [1 Mark]\n- For n nodes, each node connects to (n - 1) nodes. Since each link is bidirectional and shared by 2 nodes, total physical links = n(n - 1) / 2. [1.5 Marks]\n- For example, 5 nodes require 5(4)/2 = 10 cables. Highly robust and fault tolerant. [0.5 Mark]\n\n(b) Switch over Hub (2 Marks):\n- A hub broadcasts packets to all ports, creating a single collision domain and generating heavy unnecessary traffic. [1 Mark]\n- A switch inspects frame headers, maintains a MAC address forwarding table, and creates micro-segmented private circuits between communicating pairs, eliminating collisions and maximizing throughput. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Differentiate between Simplex, Half-Duplex, and Full-Duplex transmission modes with a practical real-world example of each.",
        "answer": "Transmission modes comparison",
        "explanation": "Marking Scheme:\n1. Simplex Mode [1.5 Marks]:\n- Data travels in only one direction (unidirectional). The sender can only transmit, and the receiver can only receive.\n- Example: Traditional radio/television broadcast, keyboard to CPU.\n2. Half-Duplex Mode [1.5 Marks]:\n- Data can travel in both directions, but only in one direction at a time (alternating).\n- Example: Walkie-talkies (one party speaks while other listens, then switches).\n3. Full-Duplex Mode [1 Mark]:\n- Data travels in both directions simultaneously.\n- Example: Telephone conversation, modern broadband Ethernet."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is data transfer rate? Explain the relationship between bps, Kbps, Mbps, and Gbps.\n(b) Why is Coaxial Cable preferred for Cable TV networks rather than Twisted Pair?",
        "answer": "(a) Data transfer rate units; (b) Coaxial cable for Cable TV",
        "explanation": "Marking Scheme:\n(a) Data Transfer Rate (2.5 Marks):\n- Data transfer rate measures the volume of digital data transmitted per unit of time across a channel. [1 Mark]\n- 1 bps = 1 bit per second\n- 1 Kbps (Kilobit per second) = 1,000 bps (or 1024 bps)\n- 1 Mbps (Megabit per second) = 1,000 Kbps = 1,000,000 bps\n- 1 Gbps (Gigabit per second) = 1,000 Mbps = 1,000,000,000 bps. [1.5 Marks]\n\n(b) Coaxial Cable in Cable TV (2.5 Marks):\n- Coaxial cables possess significantly higher bandwidth than twisted pair cables, enabling simultaneous transmission of multiple high-frequency television channels (broadband frequency division multiplexing). [1.5 Marks]\n- The heavy concentric metallic shielding provides superior protection against external electrical noise and interference over long suburban distribution runs. [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "unit_num": 2,
      "title": "Computer Networks - Protocols, Web Services, and Security",
      "unit_title": "Unit II: Computer Networks",
      "weightage_unit": "10 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which protocol is used for securely transmitting web pages over the Internet using SSL/TLS encryption?",
        "answer": "(a) HTTPS",
        "explanation": "HTTPS (Hypertext Transfer Protocol Secure) encrypts communication between the web browser and the server using SSL/TLS protocols to ensure privacy and data integrity.",
        "options": [
          "(a) HTTPS",
          "(b) HTTP",
          "(c) FTP",
          "(d) SMTP"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which protocol is responsible for sending/transmitting outgoing emails between mail servers?",
        "answer": "(a) SMTP",
        "explanation": "SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending emails from client to server and forwarding emails between mail servers.",
        "options": [
          "(a) SMTP",
          "(b) POP3",
          "(c) IMAP",
          "(d) HTTP"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A malicious program that appears to be useful or harmless software but secretly creates a backdoor into a system is known as a:",
        "answer": "(a) Trojan Horse",
        "explanation": "A Trojan Horse disguises itself as legitimate, safe software (such as a game or utility) while secretly executing unauthorized activities like creating backdoors or stealing credentials.",
        "options": [
          "(a) Trojan Horse",
          "(b) Worm",
          "(c) Virus",
          "(d) Firewall"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is the primary function of the Domain Name System (DNS)?",
        "answer": "(a) Translates human-readable domain names into IP addresses",
        "explanation": "DNS acts as the phonebook of the Internet, translating human-friendly domain names (e.g. www.cbse.gov.in) into machine-readable numerical IP addresses (e.g. 164.100.107.45).",
        "options": [
          "(a) Translates human-readable domain names into IP addresses",
          "(b) Transmits files between computers",
          "(c) Encrypts passwords",
          "(d) Allocates bandwidth"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which protocol enables voice communications and multimedia sessions over Internet Protocol (IP) networks?",
        "answer": "(a) VoIP",
        "explanation": "VoIP (Voice over Internet Protocol) allows transmission of voice and multimedia communications over packet-switched IP networks instead of traditional PSTN telephone lines.",
        "options": [
          "(a) VoIP",
          "(b) FTP",
          "(c) SMTP",
          "(d) POP3"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A fraudulent attempt to obtain sensitive information like usernames, passwords, and credit card numbers by masquerading as a trustworthy entity is called:",
        "answer": "(a) Phishing",
        "explanation": "Phishing is a social engineering cybercrime where attackers send fraudulent communications (like spoofed emails) mimicking reputable organizations to deceive victims into revealing credentials.",
        "options": [
          "(a) Phishing",
          "(b) Spooling",
          "(c) Hacking",
          "(d) Snooping"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which protocol is used to download emails from a mail server to a local client and typically deletes them from the server afterwards?",
        "answer": "(a) POP3",
        "explanation": "POP3 (Post Office Protocol version 3) retrieves email messages from a mail server and, by default, downloads them to the client's local computer and deletes them from the server.",
        "options": [
          "(a) POP3",
          "(b) SMTP",
          "(c) FTP",
          "(d) HTTP"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Small text files stored by a web browser on a user's computer to maintain state, preferences, and session tracking are called:",
        "answer": "(a) Cookies",
        "explanation": "Cookies are small data files created by web servers and stored on the client's device to remember login state, shopping cart contents, and personal browsing preferences.",
        "options": [
          "(a) Cookies",
          "(b) Bookmarks",
          "(c) Applets",
          "(d) Cache"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules is a:",
        "answer": "(a) Firewall",
        "explanation": "A firewall is a network security device (hardware or software) that inspects packet headers and filters traffic to prevent unauthorized access to or from a private network.",
        "options": [
          "(a) Firewall",
          "(b) Repeater",
          "(c) Hub",
          "(d) Modem"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which protocol provides a secure, encrypted channel for remote command-line login over an insecure network?",
        "answer": "(a) SSH",
        "explanation": "SSH (Secure Shell) provides robust cryptographic encryption for remote login, command execution, and data transmission, replacing the insecure plaintext Telnet protocol.",
        "options": [
          "(a) SSH",
          "(b) Telnet",
          "(c) FTP",
          "(d) HTTP"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Unlike a computer virus, a computer worm does NOT require:",
        "answer": "(a) A host program to attach itself to",
        "explanation": "A computer worm is a standalone self-replicating malware program that spreads independently over networks without needing to attach itself to an existing host executable file.",
        "options": [
          "(a) A host program to attach itself to",
          "(b) A network connection",
          "(c) Memory to execute",
          "(d) A CPU"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which cyber attack floods a web server with superfluous requests to overload systems and prevent legitimate requests from being fulfilled?",
        "answer": "(a) Denial of Service (DoS)",
        "explanation": "A Denial of Service (DoS) or Distributed Denial of Service (DDoS) attack overwhelms target servers with massive bogus traffic, rendering network services unavailable to genuine users.",
        "options": [
          "(a) Denial of Service (DoS)",
          "(b) Phishing",
          "(c) Man-in-the-Middle",
          "(d) Eavesdropping"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In a URL `https://www.cbse.gov.in/index.html`, which component represents the protocol?",
        "answer": "(a) https",
        "explanation": "The portion preceding '://' indicates the communication protocol (https). 'www.cbse.gov.in' is the domain name, and 'index.html' is the resource path.",
        "options": [
          "(a) https",
          "(b) www",
          "(c) cbse.gov.in",
          "(d) index.html"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The act of copying someone else's work, code, or ideas and passing them off as one's own without proper citation is called:",
        "answer": "(a) Plagiarism",
        "explanation": "Plagiarism is the unethical practice of using another author's language, thoughts, ideas, or expressions and representing them as one's own original work.",
        "options": [
          "(a) Plagiarism",
          "(b) Phishing",
          "(c) Hacking",
          "(d) Piracy"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Malware that encrypts a victim's files and demands a financial payment to restore access is called:",
        "answer": "(a) Ransomware",
        "explanation": "Ransomware is malicious software that locks or encrypts the victim's data files and threatens to delete or publish them unless a ransom is paid.",
        "options": [
          "(a) Ransomware",
          "(b) Spyware",
          "(c) Adware",
          "(d) Rootkit"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "What is the key difference between HTML and XML?",
        "answer": "(a) HTML is designed to display data, whereas XML is designed to describe and store data",
        "explanation": "HTML focuses on formatting and presentation of data with predefined tags. XML is a markup language for data transport, storage, and structuring with custom user-defined tags.",
        "options": [
          "(a) HTML is designed to display data, whereas XML is designed to describe and store data",
          "(b) XML tags are predefined, whereas HTML tags are user-defined",
          "(c) HTML is case-sensitive, while XML is not",
          "(d) XML is only used for databases"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which protocol is used for uploading and downloading files between a client and a server on the Internet?",
        "answer": "(a) FTP",
        "explanation": "FTP (File Transfer Protocol) is designed specifically for transferring files between a local computer and a remote network server.",
        "options": [
          "(a) FTP",
          "(b) SMTP",
          "(c) HTTP",
          "(d) Telnet"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An ethical hacker who identifies security vulnerabilities in systems with permission to help improve security is called a:",
        "answer": "(a) White Hat Hacker",
        "explanation": "White Hat Hackers (ethical hackers) use their skills legally to find and patch cybersecurity vulnerabilities before malicious actors (Black Hat Hackers or Crackers) can exploit them.",
        "options": [
          "(a) White Hat Hacker",
          "(b) Black Hat Hacker",
          "(c) Cracker",
          "(d) Script Kiddie"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following email protocols keeps emails synchronized across multiple devices (e.g., phone and laptop)?",
        "answer": "(a) IMAP",
        "explanation": "IMAP (Internet Message Access Protocol) manages and stores emails directly on the mail server, allowing seamless real-time synchronization across multiple client devices.",
        "options": [
          "(a) IMAP",
          "(b) POP3",
          "(c) SMTP",
          "(d) FTP"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is FOSS in computer terminology?",
        "answer": "(a) Free and Open Source Software",
        "explanation": "FOSS stands for Free and Open Source Software, granting users the freedom to run, study, modify, and redistribute the software and its source code freely.",
        "options": [
          "(a) Free and Open Source Software",
          "(b) Fast Operating System Software",
          "(c) Federal Open Standard Society",
          "(d) Format Output Storage System"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "A web page whose content changes dynamically based on user interaction and server-side processing is a:",
        "answer": "(a) Dynamic Web Page",
        "explanation": "Dynamic web pages generate customized content on-the-fly using server-side scripts (e.g. Python, PHP) and databases in response to user requests.",
        "options": [
          "(a) Dynamic Web Page",
          "(b) Static Web Page",
          "(c) Plain Text Page",
          "(d) Offline Page"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "What is the standard port number for unencrypted HTTP traffic?",
        "answer": "(a) 80",
        "explanation": "Unencrypted HTTP uses port 80 by default. Secure HTTPS uses port 443.",
        "options": [
          "(a) 80",
          "(b) 443",
          "(c) 21",
          "(d) 25"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which law in India governs legal frameworks for electronic governance, cybercrimes, and digital signatures?",
        "answer": "(a) Information Technology (IT) Act, 2000",
        "explanation": "The Information Technology Act, 2000 (and its amendments) is the primary law in India dealing with cybercrime, electronic commerce, and digital records.",
        "options": [
          "(a) Information Technology (IT) Act, 2000",
          "(b) Indian Penal Code only",
          "(c) Telecom Regulatory Authority Act",
          "(d) Digital Security Act, 1995"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Software secretly installed on a user's computer to monitor user actions, keystrokes, and personal data is:",
        "answer": "(a) Spyware",
        "explanation": "Spyware is malicious software that covertly gathers information about a user's activity and transmits it to unauthorized third parties without consent.",
        "options": [
          "(a) Spyware",
          "(b) Freeware",
          "(c) Shareware",
          "(d) Firmware"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In the TCP/IP protocol suite, which protocol ensures reliable, error-checked, in-order packet delivery between hosts?",
        "answer": "(a) TCP",
        "explanation": "Transmission Control Protocol (TCP) is a connection-oriented transport layer protocol that guarantees reliable, ordered delivery of data packets via acknowledgments and retransmissions.",
        "options": [
          "(a) TCP",
          "(b) IP",
          "(c) UDP",
          "(d) ARP"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): HTTPS is preferred over HTTP for e-commerce and online banking websites.\nReason (R): HTTPS uses SSL/TLS cryptographic encryption to prevent eavesdropping and data tampering.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why HTTPS is essential for protecting financial and confidential credentials.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): SMTP is used to download emails from the mail server to the user's local inbox.\nReason (R): POP3 and IMAP are email retrieval protocols.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because SMTP is used to send/push emails, not download them. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): A firewall can protect a network against both unauthorized incoming traffic and unauthorized outgoing traffic.\nReason (R): Firewalls inspect data packets and apply packet-filtering rules based on IP addresses and port numbers.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R describes the packet filtering mechanism by which firewalls enforce two-way security boundaries.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A computer virus cannot spread across machines unless an infected file is shared or executed.\nReason (R): A virus requires a host executable program to attach itself to and relies on human action to propagate.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R distinguishes viruses from self-propagating worms.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Cookies represent viruses that corrupt files on the user's hard disk.\nReason (R): Cookies are plain text files stored by browsers to retain state and preferences across sessions.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because cookies contain no executable code and cannot infect or corrupt files. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Differentiate between HTTP and HTTPS. State one reason why HTTPS is preferred.",
        "answer": "HTTP vs HTTPS comparison",
        "explanation": "1. Difference [1 Mark]:\n- HTTP (Hypertext Transfer Protocol) transmits web data in clear plaintext over port 80.\n- HTTPS (HTTP Secure) encrypts data using SSL/TLS encryption over port 443.\n2. Preference [1 Mark]: HTTPS prevents eavesdropping, man-in-the-middle attacks, and credential theft, ensuring privacy for financial and sensitive transactions."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Differentiate between a Virus and a Worm.",
        "answer": "Virus vs Worm comparison",
        "explanation": "1. Host Requirement [1 Mark]: A virus needs a host executable file (.exe, .doc) to attach itself to and executes only when the host file runs. A worm is a standalone program that does not require a host.\n2. Propagation [1 Mark]: A virus requires human intervention (sharing an infected file) to spread, whereas a worm self-replicates and spreads automatically across network connections, consuming bandwidth."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Explain the role of the following protocols:\n(i) FTP\n(ii) SMTP\n(iii) VoIP.",
        "answer": "Explanation of protocols",
        "explanation": "(i) FTP (File Transfer Protocol) [1 Mark]: Used for transferring, uploading, and downloading files between a client computer and a remote network server.\n(ii) SMTP (Simple Mail Transfer Protocol) [1 Mark]: Used to send and route outgoing email messages from a client to a mail server and between mail servers.\n(iii) VoIP (Voice over Internet Protocol) [1 Mark]: Enables real-time voice and multimedia calls over IP networks like the Internet instead of traditional telephone networks."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "What is Phishing? Mention two safety measures to protect against phishing attacks.",
        "answer": "Phishing definition and safeguards",
        "explanation": "1. Definition [1 Mark]: A fraudulent social engineering technique where attackers send deceptive emails or messages posing as reputable entities to trick users into divulging confidential information (passwords, OTPs, bank details).\n2. Safety Measures [1 Mark]:\n- Never click on unverified links in suspicious emails or text messages.\n- Check the website URL for secure HTTPS and correct domain spelling before entering sensitive credentials."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Differentiate between POP3 and IMAP protocols for email retrieval.",
        "answer": "POP3 vs IMAP comparison",
        "explanation": "1. Storage Location [1 Mark]: POP3 downloads emails from the mail server to the local device and deletes them from the server. IMAP stores emails directly on the server.\n2. Multi-device Synchronization [1 Mark]: POP3 is designed for a single device and does not sync changes. IMAP synchronizes folders, read/unread status, and emails across all connected devices.\n3. Offline Access [1 Mark]: POP3 allows full offline reading once downloaded. IMAP requires an active connection to view new headers and attachments unless cached."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is a Firewall? Differentiate between hardware and software firewalls.",
        "answer": "Firewall concept and types",
        "explanation": "1. Definition [1 Mark]: A security mechanism that filters incoming and outgoing network traffic based on predetermined rules to block unauthorized access.\n2. Hardware vs Software Firewall [1 Mark]:\n- Hardware Firewall: A standalone physical appliance positioned between the internal network and the Internet (e.g. Cisco ASA), protecting all connected devices.\n- Software Firewall: An application installed on an individual computer operating system (e.g. Windows Defender Firewall), protecting only that specific host."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Explain the following terms:\n(i) Cookies\n(ii) URL\n(iii) DNS.",
        "answer": "Explanation of web terms",
        "explanation": "(i) Cookies [1 Mark]: Small text files saved on a user's browser by a web server to store session data, user preferences, and shopping cart states.\n(ii) URL (Uniform Resource Locator) [1 Mark]: The unique global web address used to locate a specific resource (document, page, image) on the Internet.\n(iii) DNS (Domain Name System) [1 Mark]: A hierarchical distributed naming system that translates human-friendly domain names (e.g., google.com) into IP addresses."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is Plagiarism? Suggest two ways to avoid plagiarism in computer science projects.",
        "answer": "Plagiarism concept and avoidance",
        "explanation": "1. Concept [1 Mark]: Plagiarism is the unauthorized representation of someone else's work, code, algorithms, or ideas as one's own without appropriate attribution or credit.\n2. Ways to avoid [1 Mark]:\n- Always properly cite the original source, documentation, or author of borrowed code and algorithms.\n- Write original implementations and synthesize ideas in your own words rather than copying code directly."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Differentiate between a Static Web Page and a Dynamic Web Page with an example of each.",
        "answer": "Static vs Dynamic web pages",
        "explanation": "1. Static Web Page [1.5 Marks]: Displays the exact same pre-built content to every visitor. Written using simple HTML and CSS; content changes only when the developer manually edits the files. Example: A personal resume page or contact-us brochure.\n2. Dynamic Web Page [1.5 Marks]: Content is constructed dynamically by server-side scripts (e.g. Python, PHP) and databases in real-time based on user input, time, or session. Example: Amazon shopping cart, online banking portal, or social media feed."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is Intellectual Property Rights (IPR)? Why is it important in the digital era?",
        "answer": "IPR definition and importance",
        "explanation": "1. Definition [1 Mark]: Intellectual Property Rights (IPR) are legal rights granted to creators and inventors to protect their original creations of the mind (software, inventions, literary works, trademarks) from unauthorized commercial exploitation.\n2. Importance [1 Mark]: It fosters innovation, ensures ethical rewards for developers and creators, and legally protects software and digital assets against piracy and theft."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Explain the architecture of the World Wide Web (WWW). How do Web Client, Web Server, HTTP, and HTML interact when a user types a URL?\n(b) Differentiate between Free Software, Open Source Software, and Proprietary Software.",
        "answer": "(a) Web architecture & page retrieval; (b) Free vs Open Source vs Proprietary software",
        "explanation": "Marking Scheme:\n(a) WWW Architecture and Web Retrieval Process (3 Marks):\n1. The user types a URL (e.g. https://www.example.com/index.html) into a Web Client (browser). [0.5 Mark]\n2. The browser contacts a DNS server to resolve the domain name into an IP address. [0.5 Mark]\n3. The browser initiates a TCP/IP handshake and sends an HTTP/HTTPS GET request to the Web Server hosting that IP address. [0.75 Mark]\n4. The Web Server processes the request, locates the requested HTML file (or executes a dynamic backend script), and sends an HTTP response containing status code (200 OK) and HTML data. [0.75 Mark]\n5. The browser parses and renders the HTML, CSS, and scripts to display the webpage. [0.5 Mark]\n\n(b) Software Licensing Categories (2 Marks):\n- Free Software: Gives users the freedom to run, copy, distribute, study, change, and improve the software (e.g. GNU utilities). Emphasizes user liberty. [0.75 Mark]\n- Open Source Software: Source code is made publicly available for inspection and modification under permissive licenses (e.g. Linux, Python). [0.75 Mark]\n- Proprietary Software: Closed-source commercial software where the source code is kept secret and restricted by copyright (e.g. Microsoft Windows, Adobe Photoshop). [0.5 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Explain the following cyber threats and state the preventive measure for each:\n(a) Ransomware\n(b) Denial of Service (DoS) Attack\n(c) Identity Theft\n(d) Spyware\n(e) Trojan Horse.",
        "answer": "Detailed cyber threats and preventive measures",
        "explanation": "Marking Scheme (1 Mark each for threat definition + safeguard):\n(a) Ransomware:\n- Threat: Malware that encrypts user data files and demands a ransom to decrypt them.\n- Prevention: Maintain regular offline backups and avoid opening unverified email attachments.\n\n(b) DoS Attack:\n- Threat: Flooding a network server with excessive bogus requests to crash it.\n- Prevention: Implement load balancers, traffic filtering firewalls, and DDoS mitigation services (e.g. Cloudflare).\n\n(c) Identity Theft:\n- Threat: Criminal acquisition of personal identity data (Aadhaar, SSN, passwords) to commit fraud in the victim's name.\n- Prevention: Use strong unique passwords, multi-factor authentication (MFA), and never share confidential details.\n\n(d) Spyware:\n- Threat: Software that silently monitors user keystrokes, browsing history, and passwords.\n- Prevention: Install anti-spyware software, run regular security scans, and download apps only from trusted sources.\n\n(e) Trojan Horse:\n- Threat: Deceptive malware disguised as a harmless utility that creates unauthorized remote access backdoors.\n- Prevention: Use reliable antivirus software and avoid pirated software or suspicious file downloads."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain how TCP and IP collaborate in the TCP/IP protocol suite to deliver data over the Internet.\n(b) What is Telnet? Why is SSH preferred over Telnet for remote administration?",
        "answer": "(a) TCP and IP collaboration; (b) Telnet vs SSH",
        "explanation": "Marking Scheme:\n(a) TCP and IP Collaboration (3 Marks):\n1. Transport Layer (TCP): Breaks data messages into smaller numbered data packets at the sender. At the destination, TCP verifies packet integrity, sends acknowledgments, re-requests lost packets, and reassembles packets in correct sequence. [1.5 Marks]\n2. Network Layer (IP): Handles the addressing and routing of each individual packet across intermediate routers from source IP to destination IP. It does not guarantee delivery. [1.5 Marks]\nTogether, IP handles routing while TCP guarantees reliability.\n\n(b) Telnet vs SSH (2 Marks):\n- Telnet is an early terminal emulation protocol that transmits usernames, passwords, and commands in unencrypted plain text across the network, making it vulnerable to packet sniffing. [1 Mark]\n- SSH (Secure Shell) provides public-key cryptography and strong end-to-end data encryption for remote terminal management, protecting credentials from interception. [1 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: E-Commerce Security and Protocol Architecture\nA retail company \"ShopOnline\" operates an online shopping platform. When a customer browses products, adds items to cart, and makes a credit card payment:\n(i) Which protocol should be used for the payment gateway page to ensure security, and which port does it use?\n(ii) How do cookies assist the shopping cart functionality during the session?\n(iii) Which email protocol is used by ShopOnline's server to send order confirmation emails to customers?\n(iv) If attackers overwhelm the website with millions of fake requests during a festival sale causing it to crash, what type of attack has occurred?",
        "answer": "Solutions to E-Commerce Security Case Study",
        "explanation": "(i) HTTPS (Hypertext Transfer Protocol Secure) using Port 443. [1 Mark]\n(ii) Cookies store a unique Session ID on the client browser that links the customer's browser to their shopping cart items stored on the server. [1 Mark]\n(iii) SMTP (Simple Mail Transfer Protocol). [1 Mark]\n(iv) A Denial of Service (DoS) or Distributed Denial of Service (DDoS) attack. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) What are Digital Signatures and Digital Certificates? How do they establish trust in online transactions?\n(b) Mention three cyber safety habits that students should practice while using social media platforms.",
        "answer": "(a) Digital signatures & certificates; (b) Social media safety habits",
        "explanation": "Marking Scheme:\n(a) Digital Signatures and Certificates (3 Marks):\n- Digital Signature: A mathematical cryptographic scheme that provides authenticity, non-repudiation, and integrity verification for digital messages or software. [1.5 Marks]\n- Digital Certificate: An electronic credential issued by a trusted Certification Authority (CA) verifying the identity of the website or individual holding the public key (ensuring the user is communicating with the legitimate site). [1.5 Marks]\n\n(b) Social Media Safety Habits (2 Marks - any three):\n1. Use strong, unique passwords and enable Two-Factor Authentication (2FA).\n2. Never share sensitive personal information (home address, phone number, financial details, live location) publicly.\n3. Verify the identity of online profiles before accepting friend/connection requests, and report cyberbullying immediately. [2 Marks]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) What is VoIP? List two advantages and one limitation of VoIP over traditional telephony.\n(b) What is Web Hosting? Differentiate between a Web Server and a Web Browser.",
        "answer": "(a) VoIP analysis; (b) Web hosting and Web server vs browser",
        "explanation": "Marking Scheme:\n(a) VoIP Analysis (2.5 Marks):\n- VoIP (Voice over IP) transmits digitized audio packets across standard IP networks. [0.5 Mark]\n- Advantages: Significantly lower long-distance communication cost; integrates easily with video, chat, and data conferencing. [1 Mark]\n- Limitation: Requires high-speed, stable broadband; vulnerable to latency and jitter. [1 Mark]\n\n(b) Web Hosting & Server vs Browser (2.5 Marks):\n- Web Hosting: A service provided by hosting companies that allocates storage space and connectivity on web servers for websites to be accessible on the WWW. [1 Mark]\n- Web Server: A computer system running specialized software (e.g. Apache, Nginx) that listens for and serves web page requests. [0.75 Mark]\n- Web Browser: A client software application (e.g. Chrome, Firefox) used by end-users to request, interpret, and display web pages. [0.75 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Explain the major provisions of the Information Technology Act (IT Act), 2000 in India with respect to:\n(i) Legal recognition of electronic records and digital signatures\n(ii) Penalties for hacking and data tampering (Section 65 & 66)\n(iii) Protection against child cyber safety violations.",
        "answer": "IT Act 2000 provisions analysis",
        "explanation": "Marking Scheme:\n(i) Legal Recognition [1.5 Marks]: The IT Act 2000 grants electronic contracts, emails, and digital signatures the same legal status and admissibility in courts as physical paper documents.\n(ii) Penalties for Hacking [1.5 Marks]: Section 65 prescribes imprisonment up to 3 years and fines for tampering with computer source code. Section 66 penalizes unauthorized computer access (hacking) with up to 3 years imprisonment or fines up to ₹5 lakh.\n(iii) Child Cyber Safety [1 Mark]: Severe provisions penalize transmitting obscene or sexually explicit material involving children electronically."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is the difference between a Hacker and a Cracker?\n(b) Explain the working of public-key (asymmetric) cryptography using public and private keys.",
        "answer": "(a) Hacker vs Cracker; (b) Public-key cryptography explanation",
        "explanation": "Marking Scheme:\n(a) Hacker vs Cracker (2 Marks):\n- Hacker: A computer expert who explores computer systems, software, and networks to understand how they work and identify security weaknesses, often ethically. [1 Mark]\n- Cracker (Black Hat Hacker): A malicious individual who breaks into computer systems illegally with intent to steal data, cause damage, or commit financial fraud. [1 Mark]\n\n(b) Public-Key Cryptography (3 Marks):\n- Uses a mathematically linked pair of keys: a Public Key (distributed openly) and a Private Key (kept secret by the owner). [1 Mark]\n- Encryption: The sender encrypts the plaintext message using the recipient's Public Key. [1 Mark]\n- Decryption: Only the recipient's corresponding Private Key can decrypt the ciphertext back into plaintext. Even if intercepted, unauthorized parties cannot decrypt the data. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write short notes on:\n(a) Creative Commons (CC) Licenses\n(b) GNU General Public License (GPL)\n(c) Apache License.",
        "answer": "Open source and content licenses overview",
        "explanation": "Marking Scheme:\n(a) Creative Commons [1.5 Marks]: Standardized public copyright licenses that allow creators to give permission to share, reuse, and build upon their creative content (music, text, art) under specific conditions (Attribution, Non-commercial, ShareAlike).\n(b) GNU GPL [1.5 Marks]: A widely used copyleft software license that guarantees end users the freedom to run, study, share, and modify the software, requiring all derivative works to remain open source under the same license.\n(c) Apache License [1 Mark]: A permissive open-source license that allows users to use, modify, and distribute the software in both open-source and proprietary commercial products without copyleft restrictions."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is the role of an Internet Service Provider (ISP)? Name any two ISPs in India.\n(b) Explain the difference between bandwidth and data transfer rate with suitable examples and units.",
        "answer": "(a) ISP role & examples; (b) Bandwidth vs data transfer rate",
        "explanation": "Marking Scheme:\n(a) ISP (2 Marks):\n- An Internet Service Provider (ISP) is an organization that provides telecommunication infrastructure and gateway services allowing subscribers to connect to the global Internet. [1 Mark]\n- Examples: BSNL, Airtel, Jio. [1 Mark]\n\n(b) Bandwidth vs Data Transfer Rate (3 Marks):\n- Bandwidth: The width of the allocated frequency band on a physical transmission channel, measured in Hertz (Hz), or the theoretical maximum throughput capacity of a connection. [1.5 Marks]\n- Data Transfer Rate: The actual volume of digital bits successfully transmitted through the channel per second under real operational conditions, measured in bps, Mbps, or Gbps. [1.5 Marks]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "unit_num": 3,
      "title": "Database Concepts and SQL Commands",
      "unit_title": "Unit III: Database Management",
      "weightage_unit": "20 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In a relational database table, the number of attributes (columns) is referred to as the table's:",
        "answer": "(a) Degree",
        "explanation": "In relational database terminology, the total number of attributes (columns) in a relation is called its Degree, while the number of tuples (rows) is called its Cardinality.",
        "options": [
          "(a) Degree",
          "(b) Cardinality",
          "(c) Domain",
          "(d) Tuple"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following SQL commands is a Data Definition Language (DDL) command?",
        "answer": "(a) ALTER TABLE",
        "explanation": "ALTER TABLE modifies the database structure/schema and is a DDL command. INSERT, UPDATE, and DELETE manipulate data inside tables and are DML commands.",
        "options": [
          "(a) ALTER TABLE",
          "(b) INSERT INTO",
          "(c) UPDATE",
          "(d) DELETE"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If a table contains 6 columns and 20 rows, what are its degree and cardinality respectively?",
        "answer": "(a) Degree = 6, Cardinality = 20",
        "explanation": "Degree = number of columns = 6. Cardinality = number of rows/tuples = 20.",
        "options": [
          "(a) Degree = 6, Cardinality = 20",
          "(b) Degree = 20, Cardinality = 6",
          "(c) Degree = 120, Cardinality = 26",
          "(d) Degree = 6, Cardinality = 120"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which column constraint ensures that a column cannot have duplicate values AND cannot contain NULL values?",
        "answer": "(a) PRIMARY KEY",
        "explanation": "A PRIMARY KEY constraint enforces both uniqueness (no duplicate values) and non-nullability (cannot be NULL) for the specified attribute(s).",
        "options": [
          "(a) PRIMARY KEY",
          "(b) UNIQUE",
          "(c) NOT NULL",
          "(d) CHECK"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which SQL command is used to add a new column 'Email' of type VARCHAR(50) to an existing table 'STUDENT'?",
        "answer": "(a) ALTER TABLE STUDENT ADD Email VARCHAR(50);",
        "explanation": "The correct syntax to add a new column to an existing table in SQL is: ALTER TABLE table_name ADD column_name datatype;",
        "options": [
          "(a) ALTER TABLE STUDENT ADD Email VARCHAR(50);",
          "(b) UPDATE TABLE STUDENT ADD Email VARCHAR(50);",
          "(c) INSERT INTO STUDENT ADD Email VARCHAR(50);",
          "(d) MODIFY TABLE STUDENT Email VARCHAR(50);"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a table, all candidate keys that are NOT selected as the primary key are called:",
        "answer": "(a) Alternate Keys",
        "explanation": "Candidate keys that are not selected to serve as the Primary Key are known as Alternate Keys.",
        "options": [
          "(a) Alternate Keys",
          "(b) Foreign Keys",
          "(c) Primary Keys",
          "(d) Secondary Keys"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which SQL clause is used to filter rows based on a specific search condition?",
        "answer": "(a) WHERE",
        "explanation": "The WHERE clause specifies search conditions used to filter rows in SELECT, UPDATE, or DELETE statements.",
        "options": [
          "(a) WHERE",
          "(b) GROUP BY",
          "(c) ORDER BY",
          "(d) HAVING"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the difference between CHAR(10) and VARCHAR(10) in MySQL?",
        "answer": "(a) CHAR(10) allocates fixed 10 bytes, while VARCHAR(10) allocates variable length based on actual characters stored",
        "explanation": "CHAR is a fixed-length character data type (pads unused positions with spaces to allocate 10 bytes), whereas VARCHAR is variable-length (stores only the actual characters plus length prefix bytes).",
        "options": [
          "(a) CHAR(10) allocates fixed 10 bytes, while VARCHAR(10) allocates variable length based on actual characters stored",
          "(b) VARCHAR(10) is fixed, while CHAR(10) is variable",
          "(c) CHAR holds numbers, while VARCHAR holds text",
          "(d) No difference"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which pattern matching wildcard character in SQL matches any string of zero or more characters?",
        "answer": "(a) % (percent)",
        "explanation": "In SQL LIKE clauses, '%' matches zero or more characters, while '_' matches exactly one single character.",
        "options": [
          "(a) % (percent)",
          "(b) _ (underscore)",
          "(c) * (asterisk)",
          "(d) ? (question mark)"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which SQL statement is used to remove all rows from a table while keeping the table structure intact?",
        "answer": "(a) DELETE FROM table_name;",
        "explanation": "DELETE FROM table_name; removes all rows from the table while retaining the table definition and schema in the database. DROP TABLE destroys the schema completely.",
        "options": [
          "(a) DELETE FROM table_name;",
          "(b) DROP TABLE table_name;",
          "(c) REMOVE TABLE table_name;",
          "(d) ALTER TABLE table_name DROP ALL;"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "An attribute in one table that references the primary key of another table to maintain referential integrity is called a:",
        "answer": "(a) Foreign Key",
        "explanation": "A Foreign Key is an attribute in a relation that matches the Primary Key of a referenced parent relation, enforcing referential integrity.",
        "options": [
          "(a) Foreign Key",
          "(b) Primary Key",
          "(c) Candidate Key",
          "(d) Composite Key"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which operator is used to test for a NULL value in a column?",
        "answer": "(a) IS NULL",
        "explanation": "In SQL, NULL represents missing/unknown data and cannot be compared using '='. The special comparison operator 'IS NULL' (or 'IS NOT NULL') must be used.",
        "options": [
          "(a) IS NULL",
          "(b) == NULL",
          "(c) = NULL",
          "(d) EQUALS NULL"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which SQL keyword is used to eliminate duplicate values from the output of a query?",
        "answer": "(a) DISTINCT",
        "explanation": "The DISTINCT keyword used in a SELECT statement removes duplicate rows from the resulting output.",
        "options": [
          "(a) DISTINCT",
          "(b) UNIQUE",
          "(c) DIFFERENT",
          "(d) EXCLUDE"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "To display names of students starting with the letter 'S', which condition should be used in the WHERE clause?",
        "answer": "(a) Name LIKE 'S%'",
        "explanation": "LIKE 'S%' matches any string starting with capital 'S' followed by any sequence of characters.",
        "options": [
          "(a) Name LIKE 'S%'",
          "(b) Name LIKE '_S'",
          "(c) Name = 'S*'",
          "(d) Name IN ('S')"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which SQL command is used to modify existing data records inside a table?",
        "answer": "(a) UPDATE",
        "explanation": "UPDATE is a DML command used to alter data in existing records. ALTER modifies the structural schema of the table.",
        "options": [
          "(a) UPDATE",
          "(b) ALTER",
          "(c) MODIFY",
          "(d) CHANGE"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "To select all employees whose Salary is between 30000 and 50000 (both inclusive), which clause is used?",
        "answer": "(a) WHERE Salary BETWEEN 30000 AND 50000",
        "explanation": "The BETWEEN operator in SQL tests if an attribute value falls within a range inclusive of both boundary endpoints.",
        "options": [
          "(a) WHERE Salary BETWEEN 30000 AND 50000",
          "(b) WHERE Salary IN (30000, 50000)",
          "(c) WHERE Salary >= 30000 OR Salary <= 50000",
          "(d) WHERE Salary FROM 30000 TO 50000"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following commands completely deletes a table and its schema from the database?",
        "answer": "(a) DROP TABLE table_name;",
        "explanation": "DROP TABLE is a DDL command that removes both the table's records and its structural schema permanently from the database dictionary.",
        "options": [
          "(a) DROP TABLE table_name;",
          "(b) DELETE TABLE table_name;",
          "(c) REMOVE TABLE table_name;",
          "(d) TRUNCATE TABLE table_name;"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What is the result of multiplying the degree of table A (degree 3, cardinality 4) with table B (degree 2, cardinality 5) in a Cartesian Product?",
        "answer": "(a) Degree = 5, Cardinality = 20",
        "explanation": "In a Cartesian Product (Cross Join) of two relations: Degree = Degree(A) + Degree(B) = 3 + 2 = 5. Cardinality = Cardinality(A) × Cardinality(B) = 4 × 5 = 20.",
        "options": [
          "(a) Degree = 5, Cardinality = 20",
          "(b) Degree = 6, Cardinality = 20",
          "(c) Degree = 5, Cardinality = 9",
          "(d) Degree = 6, Cardinality = 9"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which SQL command is used to select and activate a database before creating or accessing tables?",
        "answer": "(a) USE db_name;",
        "explanation": "The 'USE database_name;' statement selects the default database for subsequent operations.",
        "options": [
          "(a) USE db_name;",
          "(b) OPEN db_name;",
          "(c) SELECT db_name;",
          "(d) ACTIVATE db_name;"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "To display records of students who belong to either 'Delhi', 'Mumbai', or 'Kolkata', which operator is most concise?",
        "answer": "(a) City IN ('Delhi', 'Mumbai', 'Kolkata')",
        "explanation": "The IN operator allows testing whether a column value matches any value in a specified list.",
        "options": [
          "(a) City IN ('Delhi', 'Mumbai', 'Kolkata')",
          "(b) City = 'Delhi' AND City = 'Mumbai'",
          "(c) City LIKE ('Delhi', 'Mumbai')",
          "(d) City BETWEEN 'Delhi' AND 'Kolkata'"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following cannot be used as a primary key?",
        "answer": "(a) A column containing NULL values",
        "explanation": "Entity integrity constraint dictates that no attribute participating in the primary key can take a NULL value.",
        "options": [
          "(a) A column containing NULL values",
          "(b) An integer column with unique values",
          "(c) A composite key consisting of two columns",
          "(d) A character column with unique codes"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which command displays the schema structure (columns, data types, keys) of an existing table?",
        "answer": "(a) DESCRIBE table_name; (or DESC)",
        "explanation": "DESCRIBE table_name; (or DESC table_name;) lists the column names, datatypes, nullability, key constraints, and default values of the specified table.",
        "options": [
          "(a) DESCRIBE table_name; (or DESC)",
          "(b) SHOW table_name;",
          "(c) VIEW table_name;",
          "(d) SELECT * FROM table_name;"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the output of the query: SELECT 5 + NULL;",
        "answer": "(a) NULL",
        "explanation": "Any arithmetic operation involving a NULL operand always evaluates to NULL.",
        "options": [
          "(a) NULL",
          "(b) 5",
          "(c) 0",
          "(d) Error"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which clause is used in an ALTER TABLE statement to remove an existing column 'Remarks'?",
        "answer": "(a) ALTER TABLE STUDENT DROP COLUMN Remarks;",
        "explanation": "To delete an attribute from a table, use: ALTER TABLE table_name DROP COLUMN column_name; (COLUMN keyword is optional in MySQL).",
        "options": [
          "(a) ALTER TABLE STUDENT DROP COLUMN Remarks;",
          "(b) ALTER TABLE STUDENT DELETE Remarks;",
          "(c) ALTER TABLE STUDENT REMOVE Remarks;",
          "(d) DROP Remarks FROM STUDENT;"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a relational model, a single row representing an entity instance is termed as a:",
        "answer": "(a) Tuple",
        "explanation": "A row in a relational database table is formally called a Tuple (or Record).",
        "options": [
          "(a) Tuple",
          "(b) Attribute",
          "(c) Domain",
          "(d) Relation"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): A relation can have multiple candidate keys but only one primary key.\nReason (R): The primary key is chosen from the candidate keys by the database designer to uniquely identify tuples.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. All minimal superkeys capable of uniquely identifying rows are candidate keys; one is designated as the primary key and the remaining become alternate keys.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The command 'DELETE FROM Student WHERE Marks < 40;' deletes the Student table.\nReason (R): DELETE is a DML command that affects rows satisfying a condition but retains the table definition.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because DELETE removes only rows matching the condition, leaving the table itself intact. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): A foreign key value can be NULL unless constrained by NOT NULL.\nReason (R): Referential integrity allows a foreign key to be NULL when an optional relationship exists between parent and child tables.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. A foreign key must either match an existing primary key value in the parent table or be NULL.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): DDL commands like CREATE and ALTER affect the metadata of the database.\nReason (R): Metadata is data about data, describing the structure and constraints of database relations.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R gives the precise definition of metadata which DDL commands define and modify.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The query 'SELECT * FROM Employee WHERE Salary = NULL;' will return all employees with no salary recorded.\nReason (R): NULL values in SQL cannot be evaluated using the '=' equality operator; 'IS NULL' must be used.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because 'Salary = NULL' evaluates to UNKNOWN/NULL for every row, returning 0 rows. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Define Degree and Cardinality of a database relation. If relation R has 4 attributes and 15 tuples, state its degree and cardinality.",
        "answer": "Degree and Cardinality definition and values",
        "explanation": "1. Definitions [1 Mark]:\n- Degree: The total number of attributes (columns) in a relation.\n- Cardinality: The total number of tuples (rows) in a relation.\n2. Given values [1 Mark]:\n- Degree = 4\n- Cardinality = 15."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Differentiate between DDL and DML commands in SQL. Give two examples of each.",
        "answer": "DDL vs DML comparison with examples",
        "explanation": "1. DDL (Data Definition Language) [1 Mark]: Used to create, alter, and delete database structures/schemas (metadata). Examples: CREATE TABLE, ALTER TABLE, DROP TABLE.\n2. DML (Data Manipulation Language) [1 Mark]: Used to insert, retrieve, modify, and delete the actual data records stored in tables. Examples: SELECT, INSERT, UPDATE, DELETE."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Explain Candidate Key, Primary Key, and Alternate Key with the help of a suitable table example.",
        "answer": "Candidate, Primary, and Alternate keys explanation",
        "explanation": "Consider table Student(AdmNo, RollNo, Name, Email) [1 Mark]:\n1. Candidate Key [1 Mark]: A minimal set of attributes that uniquely identifies every tuple in the relation. Here, AdmNo, RollNo, and Email are Candidate Keys.\n2. Primary Key [0.5 Mark]: The candidate key chosen by the database administrator to uniquely identify tuples. If AdmNo is chosen, it is the Primary Key.\n3. Alternate Key [0.5 Mark]: All candidate keys that are not selected as the primary key. Here, RollNo and Email are Alternate Keys."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Write SQL queries to:\n(i) Create a database named 'SchoolDB'.\n(ii) Display the names of all tables present in the active database.",
        "answer": "SQL queries for database creation and table listing",
        "explanation": "(i) CREATE DATABASE SchoolDB; [1 Mark]\n(ii) SHOW TABLES; [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Consider table TEACHER(TID, TName, Subject, Salary, HireDate). Write SQL commands to:\n(i) Display details of teachers whose salary is between 35000 and 55000.\n(ii) Display names of teachers whose subject is NOT 'Maths'.\n(iii) Increase the salary of all 'Computer' teachers by 5000.",
        "answer": "SQL queries on TEACHER table",
        "explanation": "(i) SELECT * FROM TEACHER WHERE Salary BETWEEN 35000 AND 55000; [1 Mark]\n(ii) SELECT TName FROM TEACHER WHERE Subject <> 'Maths'; (or Subject != 'Maths') [1 Mark]\n(iii) UPDATE TEACHER SET Salary = Salary + 5000 WHERE Subject = 'Computer'; [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is the purpose of the FOREIGN KEY constraint in SQL? How does it enforce referential integrity?",
        "answer": "Foreign key and referential integrity",
        "explanation": "1. Purpose [1 Mark]: A Foreign Key links a column in a child table to the Primary Key of a parent table, establishing a relationship between them.\n2. Referential Integrity [1 Mark]: It ensures that a child table cannot reference a non-existent parent entity; attempting to insert an invalid key or delete a referenced parent record raises a constraint violation error."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write SQL queries for table HOSPITAL(PID, Name, Department, DocFee, DateAdm):\n(i) Display details of patients who were admitted in the year 2023.\n(ii) Display names of patients whose name ends with 'sh'.\n(iii) Display distinct departments present in the hospital.",
        "answer": "SQL queries on HOSPITAL table",
        "explanation": "(i) SELECT * FROM HOSPITAL WHERE DateAdm BETWEEN '2023-01-01' AND '2023-12-31'; (or YEAR(DateAdm) = 2023;) [1 Mark]\n(ii) SELECT Name FROM HOSPITAL WHERE Name LIKE '%sh'; [1 Mark]\n(iii) SELECT DISTINCT Department FROM HOSPITAL; [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Differentiate between DROP TABLE and DELETE FROM statements in SQL.",
        "answer": "DROP TABLE vs DELETE FROM",
        "explanation": "1. DROP TABLE [1 Mark]: A DDL statement that completely deletes the entire table including its schema, definitions, and data rows permanently from the database.\n2. DELETE FROM [1 Mark]: A DML statement that removes specific rows (or all rows) from the table, but the table schema and columns remain intact for future insertions."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Consider the table ITEM(ItemCode, ItemName, Category, Price, Quantity). Write SQL commands to:\n(i) Add a new column 'Discount' of integer type to the table.\n(ii) Change the data type of 'ItemName' to VARCHAR(40).\n(iii) Delete the column 'Discount' from the table.",
        "answer": "SQL ALTER TABLE commands",
        "explanation": "(i) ALTER TABLE ITEM ADD Discount INT; [1 Mark]\n(ii) ALTER TABLE ITEM MODIFY ItemName VARCHAR(40); [1 Mark]\n(iii) ALTER TABLE ITEM DROP COLUMN Discount; [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is data redundancy? How does a Relational Database Management System (RDBMS) prevent it?",
        "answer": "Data redundancy definition and prevention",
        "explanation": "1. Definition [1 Mark]: Data redundancy refers to the unnecessary duplication of the same data across multiple files/locations.\n2. Prevention [1 Mark]: RDBMS organizes data into normalized relational tables linked by keys, ensuring that data is stored in a single primary location and referenced elsewhere."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Write SQL queries for (a) to (e) based on the table `STUDENT`:\nTable: STUDENT\n| AdmNo | Name | Stream | Marks | Gender | DOB |\n| 101 | Aman | Science | 92.5 | M | 2006-05-14 |\n| 102 | Priya | Commerce | 88.0 | F | 2005-11-20 |\n| 103 | Rohan | Science | 74.0 | M | 2006-03-02 |\n| 104 | Shreya | Humanities | 95.0 | F | 2005-08-15 |\n| 105 | Vikram | Commerce | NULL | M | 2006-01-10 |\n\n(a) Display the names and streams of all female students.\n(b) Display details of students whose marks are not specified (NULL).\n(c) Display details of all students belonging to either Science or Humanities stream.\n(d) Display the name and marks of all students who were born before 1st January 2006.\n(e) Insert a new row: `(106, 'Kavita', 'Science', 85.0, 'F', '2006-07-22')`.",
        "answer": "SQL queries on STUDENT table",
        "explanation": "Marking Scheme (1 Mark per query):\n(a) SELECT Name, Stream FROM STUDENT WHERE Gender = 'F';\n(b) SELECT * FROM STUDENT WHERE Marks IS NULL;\n(c) SELECT * FROM STUDENT WHERE Stream IN ('Science', 'Humanities');\n    (or Stream = 'Science' OR Stream = 'Humanities')\n(d) SELECT Name, Marks FROM STUDENT WHERE DOB < '2006-01-01';\n(e) INSERT INTO STUDENT VALUES (106, 'Kavita', 'Science', 85.0, 'F', '2006-07-22');"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Write the SQL DDL command to create the table `EMPLOYEE` with the following specifications:\n- EmpID: Integer, Primary Key\n- EmpName: Variable characters up to 30, cannot be NULL\n- Department: Variable characters up to 20, default value 'General'\n- Salary: Decimal(10, 2), must be greater than 10000\n- DateOfJoin: Date\nAlso write commands to:\n(a) Add a unique constraint on EmpName.\n(b) Drop the Department column from the table.",
        "answer": "CREATE TABLE and ALTER TABLE commands",
        "explanation": "Marking Scheme:\n1. CREATE TABLE statement [3 Marks]:\nCREATE TABLE EMPLOYEE (\n    EmpID INT PRIMARY KEY,\n    EmpName VARCHAR(30) NOT NULL,\n    Department VARCHAR(20) DEFAULT 'General',\n    Salary DECIMAL(10, 2) CHECK (Salary > 10000),\n    DateOfJoin DATE\n);\n\n2. Add UNIQUE constraint [1 Mark]:\nALTER TABLE EMPLOYEE ADD UNIQUE (EmpName);\n\n3. Drop Department column [1 Mark]:\nALTER TABLE EMPLOYEE DROP COLUMN Department;"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Consider the table `FLIGHT`:\n| FlightNo | Airline | Origin | Destination | Fare | SeatsAvailable |\n| AI101 | Air India | Delhi | Mumbai | 5500 | 25 |\n| 6E205 | IndiGo | Mumbai | Bengaluru | 4200 | 12 |\n| SG302 | SpiceJet | Delhi | Goa | 6800 | 0 |\n| AI202 | Air India | Chennai | Delhi | 7200 | 30 |\n| UK810 | Vistara | Delhi | Mumbai | 5900 | 8 |\n\nWrite SQL queries to:\n(a) Display flight numbers and airlines for flights flying from 'Delhi' to 'Mumbai'.\n(b) Display details of flights where no seats are available (SeatsAvailable is 0).\n(c) Increase the fare of all 'Air India' flights by 10%.\n(d) Display distinct origin cities.\n(e) Delete all flights where fare is greater than 7000.",
        "answer": "SQL queries on FLIGHT table",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT FlightNo, Airline FROM FLIGHT WHERE Origin = 'Delhi' AND Destination = 'Mumbai';\n(b) SELECT * FROM FLIGHT WHERE SeatsAvailable = 0;\n(c) UPDATE FLIGHT SET Fare = Fare * 1.10 WHERE Airline = 'Air India';\n(d) SELECT DISTINCT Origin FROM FLIGHT;\n(e) DELETE FROM FLIGHT WHERE Fare > 7000;"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following scenario and answer the questions:\nCase Study: Online Retail Order Database Design\nA developer is designing a database with two tables: `CUSTOMERS` and `ORDERS`.\n- CUSTOMERS(CustID, CustName, Phone, City) where CustID is the primary key.\n- ORDERS(OrderID, OrderDate, Amount, CustID) where OrderID is primary key and CustID references CUSTOMERS.\n(i) Identify the Foreign Key in the ORDERS table.\n(ii) State the degree and cardinality of CUSTOMERS if it has 4 columns and 50 registered customers.\n(iii) Write the SQL statement to define CustID as foreign key while creating ORDERS.\n(iv) What will happen if an attempt is made to insert an order with a CustID of 999 when no such customer exists in CUSTOMERS?",
        "answer": "Solutions to Retail Database Design Case Study",
        "explanation": "(i) CustID in the ORDERS table. [1 Mark]\n(ii) Degree = 4, Cardinality = 50. [1 Mark]\n(iii) FOREIGN KEY (CustID) REFERENCES CUSTOMERS(CustID) [1 Mark]\n(iv) The database will raise a Foreign Key Constraint violation error (referential integrity check failure), and the insertion will be rejected. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Consider table `BOOK(BookCode, Title, Author, Price, PubDate)`.\nWrite SQL queries to:\n(a) Display all books whose title starts with 'Data' and ends with 's'.\n(b) Display details of books whose price is not in the range 200 to 500.\n(c) Display titles of books where author name contains the letter 'a' as the second character.\n(d) Update price of all books authored by 'Tanenbaum' to 650.\n(e) Display details of books published in the month of May (any year).",
        "answer": "SQL queries on BOOK table",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT * FROM BOOK WHERE Title LIKE 'Data%s';\n(b) SELECT * FROM BOOK WHERE Price NOT BETWEEN 200 AND 500;\n(c) SELECT Title FROM BOOK WHERE Author LIKE '_a%';\n(d) UPDATE BOOK SET Price = 650 WHERE Author = 'Tanenbaum';\n(e) SELECT * FROM BOOK WHERE MONTH(PubDate) = 5; (or PubDate LIKE '%-05-%')"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Explain Entity Integrity Constraint and Referential Integrity Constraint in relational databases.\n(b) Write SQL commands to create table `SUPPLIER(SuppID, SuppName, City, ContactNo)` with SuppID as primary key and SuppName not null.",
        "answer": "(a) Integrity constraints; (b) CREATE TABLE SUPPLIER",
        "explanation": "Marking Scheme:\n(a) Integrity Constraints (3 Marks):\n- Entity Integrity Constraint: Dictates that no primary key value can be NULL because it is used to uniquely identify individual tuples in the relation. [1.5 Marks]\n- Referential Integrity Constraint: Dictates that if a foreign key exists in a relation, its value must either match an existing primary key value in the parent relation or be completely NULL. [1.5 Marks]\n\n(b) CREATE TABLE SUPPLIER (2 Marks):\nCREATE TABLE SUPPLIER (\n    SuppID INT PRIMARY KEY,\n    SuppName VARCHAR(40) NOT NULL,\n    City VARCHAR(30),\n    ContactNo VARCHAR(15)\n);"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Consider table `VEHICLE(RegNo, Model, Make, Capacity, RatePerKm)`.\nWrite SQL queries to:\n(a) Display details of vehicles where Make is 'Toyota' or 'Honda'.\n(b) Display RegNo and Model of vehicles having Capacity of at least 7 passengers.\n(c) Display details of vehicles sorted by RatePerKm in descending order.\n(d) Increase RatePerKm by ₹2 for all vehicles whose capacity is greater than 5.",
        "answer": "SQL queries on VEHICLE table",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT * FROM VEHICLE WHERE Make IN ('Toyota', 'Honda');\n(b) SELECT RegNo, Model FROM VEHICLE WHERE Capacity >= 7;\n(c) SELECT * FROM VEHICLE ORDER BY RatePerKm DESC;\n(d) UPDATE VEHICLE SET RatePerKm = RatePerKm + 2 WHERE Capacity > 5;"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is a NULL value in SQL? How does it differ from zero or a blank space?\n(b) Consider table `STUDENT`. Write queries to:\n(i) Select records where Commission IS NULL.\n(ii) Select records where Commission IS NOT NULL.",
        "answer": "(a) NULL value concept; (b) IS NULL queries",
        "explanation": "Marking Scheme:\n(a) NULL Value Concept (3 Marks):\n- A NULL value in SQL represents missing, unavailable, unassigned, or inapplicable information. [1.5 Marks]\n- It is fundamentally distinct from zero (0 is a defined numeric value) and an empty/blank string ('' is a character string of length 0). NULL signifies the total absence of a value. [1.5 Marks]\n\n(b) SQL Queries (2 Marks):\n(i) SELECT * FROM STUDENT WHERE Commission IS NULL; [1 Mark]\n(ii) SELECT * FROM STUDENT WHERE Commission IS NOT NULL; [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Consider table `PRODUCT(PID, PName, Company, Price, Qty)`.\nWrite SQL commands to:\n(a) Display all products manufactured by 'Samsung' with Price less than 15000.\n(b) Display PName and Qty where PName has 'Phone' anywhere in the title.\n(c) Add ₹500 to Price for all products where Qty is less than 10.\n(d) Delete all products where Company is 'Nokia'.",
        "answer": "SQL queries on PRODUCT table",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT * FROM PRODUCT WHERE Company = 'Samsung' AND Price < 15000;\n(b) SELECT PName, Qty FROM PRODUCT WHERE PName LIKE '%Phone%';\n(c) UPDATE PRODUCT SET Price = Price + 500 WHERE Qty < 10;\n(d) DELETE FROM PRODUCT WHERE Company = 'Nokia';"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Differentiate between PRIMARY KEY constraint and UNIQUE constraint in SQL.\n(b) Table A has 3 attributes and 6 rows; Table B has 4 attributes and 5 rows. What will be the degree and cardinality of the Cartesian product of Table A and Table B?",
        "answer": "(a) PRIMARY KEY vs UNIQUE; (b) Degree = 7, Cardinality = 30",
        "explanation": "Marking Scheme:\n(a) PRIMARY KEY vs UNIQUE Constraint (3 Marks):\n1. Uniqueness: Both enforce unique values across column(s). [1 Mark]\n2. Nullability: A PRIMARY KEY column cannot accept NULL values, whereas a UNIQUE column can accept one (or more, depending on RDBMS) NULL value. [1 Mark]\n3. Frequency per table: A table can have only ONE Primary Key, but can have multiple UNIQUE constraints. [1 Mark]\n\n(b) Cartesian Product Calculation (2 Marks):\n- Degree of Cartesian Product = Degree(A) + Degree(B) = 3 + 4 = 7 columns. [1 Mark]\n- Cardinality of Cartesian Product = Cardinality(A) × Cardinality(B) = 6 × 5 = 30 rows. [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "unit_num": 3,
      "title": "Advanced SQL: Functions, Grouping, and Joins",
      "unit_title": "Unit III: Database Management",
      "weightage_unit": "20 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following aggregate functions ignores NULL values when calculating the result?",
        "answer": "(b) COUNT(column_name)",
        "explanation": "COUNT(column_name), SUM(), AVG(), MIN(), and MAX() ignore NULL values. In contrast, COUNT(*) counts all rows in the table regardless of whether individual columns contain NULLs.",
        "options": [
          "(a) COUNT(*)",
          "(b) COUNT(column_name)",
          "(c) Both (a) and (b)",
          "(d) Neither (a) nor (b)"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What will be the output of the query: SELECT ROUND(153.678, 1);",
        "answer": "(b) 153.7",
        "explanation": "ROUND(153.678, 1) rounds the number to 1 decimal place. The next digit is 7 (>= 5), so 6 rounds up to 7, producing 153.7.",
        "options": [
          "(a) 153.6",
          "(b) 153.7",
          "(c) 154.0",
          "(d) 150"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which SQL clause is used to filter groups created by the GROUP BY clause?",
        "answer": "(b) HAVING",
        "explanation": "The HAVING clause is specifically designed to filter aggregated groups of rows produced by GROUP BY. WHERE filters individual rows before grouping.",
        "options": [
          "(a) WHERE",
          "(b) HAVING",
          "(c) ORDER BY",
          "(d) LIKE"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is the output of the query: SELECT SUBSTR('COMPUTER SCIENCE', 10, 4);",
        "answer": "(b) SCIE",
        "explanation": "SUBSTR(str, pos, len) extracts 4 characters starting at 1-based index 10. The 10th character is 'S', so 4 characters gives 'SCIE'.",
        "options": [
          "(a) SCI",
          "(b) SCIE",
          "(c) CIEN",
          "(d) ENCE"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What is the output of: SELECT INSTR('INFORMATICS', 'MA');",
        "answer": "(b) 6",
        "explanation": "INSTR(str, substr) returns the 1-based position of the first occurrence of substr. In 'INFORMATICS': I(1) N(2) F(3) O(4) R(5) M(6) A(7), so 'MA' begins at index 6.",
        "options": [
          "(a) 5",
          "(b) 6",
          "(c) 4",
          "(d) 7"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "Which date function returns the name of the month for a given date?",
        "answer": "(b) MONTHNAME()",
        "explanation": "MONTHNAME(date) returns the full name of the month (e.g. 'January'), while MONTH(date) returns the numeric month (1 to 12).",
        "options": [
          "(a) MONTH()",
          "(b) MONTHNAME()",
          "(c) GETMONTH()",
          "(d) NAMEMONTH()"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "What is the output of: SELECT MOD(29, 5);",
        "answer": "(b) 4",
        "explanation": "MOD(N, M) returns the remainder of dividing N by M. 29 divided by 5 gives quotient 5 and remainder 4.",
        "options": [
          "(a) 5",
          "(b) 4",
          "(c) 5.8",
          "(d) 1"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What will be the output of: SELECT LENGTH(TRIM('   PYTHON   '));",
        "answer": "(b) 6",
        "explanation": "TRIM() removes leading and trailing spaces from '   PYTHON   ', leaving 'PYTHON'. LENGTH('PYTHON') is 6.",
        "options": [
          "(a) 12",
          "(b) 6",
          "(c) 8",
          "(d) 10"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which SQL function is used to convert all characters of a string into uppercase?",
        "answer": "(b) UCASE() / UPPER()",
        "explanation": "Both UCASE() and UPPER() are valid synonyms in SQL/MySQL to convert strings to uppercase.",
        "options": [
          "(a) UPPERCASE()",
          "(b) UCASE() / UPPER()",
          "(c) TOUPPER()",
          "(d) CAPITAL()"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What will be the output of: SELECT ROUND(365.284, -1);",
        "answer": "(c) 370",
        "explanation": "A negative decimal argument (-1) rounds to the tens place. The unit digit is 5, which rounds up to the next ten, giving 370.",
        "options": [
          "(a) 365",
          "(b) 360",
          "(c) 370",
          "(d) 365.3"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Consider table Emp with 5 rows where Salary column has values: 10000, 20000, NULL, 30000, NULL. What is the output of SELECT COUNT(Salary), COUNT(*) FROM Emp;",
        "answer": "(a) 3, 5",
        "explanation": "COUNT(Salary) counts only non-null values (3 values), while COUNT(*) counts total rows in the relation (5 rows).",
        "options": [
          "(a) 3, 5",
          "(b) 5, 5",
          "(c) 3, 3",
          "(d) 5, 3"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which function returns both current date and current time simultaneously?",
        "answer": "(d) Both (b) and (c)",
        "explanation": "Both NOW() and SYSDATE() return the current date and time in 'YYYY-MM-DD HH:MM:SS' format.",
        "options": [
          "(a) CURDATE()",
          "(b) NOW()",
          "(c) SYSDATE()",
          "(d) Both (b) and (c)"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the output of: SELECT DAYOFMONTH('2024-08-15');",
        "answer": "(a) 15",
        "explanation": "DAYOFMONTH() returns the day of the month for the given date, which is 15.",
        "options": [
          "(a) 15",
          "(b) 8",
          "(c) 2024",
          "(d) Thursday"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In SQL, which clause is used to display output records sorted in descending order of a column?",
        "answer": "(a) ORDER BY col DESC",
        "explanation": "The ORDER BY clause sorts output rows; appending the DESC keyword sorts them in descending order (ASC is the default).",
        "options": [
          "(a) ORDER BY col DESC",
          "(b) SORT BY col DESC",
          "(c) GROUP BY col DESC",
          "(d) ARRANGE col DESC"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What is the output of: SELECT POWER(2, 3) * MOD(10, 3);",
        "answer": "(a) 8",
        "explanation": "POWER(2, 3) = 8. MOD(10, 3) = 1. 8 * 1 = 8.",
        "options": [
          "(a) 8",
          "(b) 6",
          "(c) 24",
          "(d) 16"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "When two tables are joined without specifying any joining condition in the WHERE clause, the result is a:",
        "answer": "(b) Cartesian Product (Cross Join)",
        "explanation": "A join without a matching condition combines every row of the first table with every row of the second table, resulting in a Cartesian Product.",
        "options": [
          "(a) Natural Join",
          "(b) Cartesian Product (Cross Join)",
          "(c) Equi-Join",
          "(d) Outer Join"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the output of: SELECT LEFT('PREBOARD', 3);",
        "answer": "(a) PRE",
        "explanation": "LEFT(str, len) extracts the leftmost len characters from the string. For 'PREBOARD' with length 3, it returns 'PRE'.",
        "options": [
          "(a) PRE",
          "(b) OAR",
          "(c) ARD",
          "(d) P"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following is NOT an aggregate function in SQL?",
        "answer": "(c) ROUND()",
        "explanation": "ROUND() is a scalar math function operating on a single value per row, whereas AVG, SUM, and COUNT are multi-row aggregate functions.",
        "options": [
          "(a) AVG()",
          "(b) SUM()",
          "(c) ROUND()",
          "(d) COUNT()"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What will be the output of: SELECT DAYNAME('2024-01-26'); (Note: 26th Jan 2024 was a Friday)",
        "answer": "(a) Friday",
        "explanation": "DAYNAME(date) returns the full name of the weekday for a specified date, which is 'Friday'.",
        "options": [
          "(a) Friday",
          "(b) 26",
          "(c) January",
          "(d) 5"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "An equi-join between two tables where duplicate joining columns are eliminated is termed as:",
        "answer": "(a) Natural Join",
        "explanation": "A Natural Join is an equi-join performed on all columns having matching names in both tables, retaining only one copy of each matched column.",
        "options": [
          "(a) Natural Join",
          "(b) Cross Join",
          "(c) Full Join",
          "(d) Non-equi Join"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What will be the output of: SELECT RIGHT('CENTRAL BOARD', 5);",
        "answer": "(a) BOARD",
        "explanation": "RIGHT(str, len) extracts the rightmost len characters. The last 5 characters of 'CENTRAL BOARD' are 'BOARD'.",
        "options": [
          "(a) BOARD",
          "(b) CENTR",
          "(c) BOAR",
          "(d) OARD"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the output of the query: SELECT ROUND(45.926, 2);",
        "answer": "(b) 45.93",
        "explanation": "The 3rd decimal digit is 6 (>= 5), so the second decimal place 2 rounds up to 3, giving 45.93.",
        "options": [
          "(a) 45.92",
          "(b) 45.93",
          "(c) 46.00",
          "(d) 45.90"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following queries calculates the average salary for each department from the table EMP?",
        "answer": "(a) SELECT Dept, AVG(Salary) FROM EMP GROUP BY Dept;",
        "explanation": "To calculate aggregate values per group/category, the GROUP BY clause must group rows by the category column (Dept).",
        "options": [
          "(a) SELECT Dept, AVG(Salary) FROM EMP GROUP BY Dept;",
          "(b) SELECT Dept, AVG(Salary) FROM EMP ORDER BY Dept;",
          "(c) SELECT Dept, AVG(Salary) FROM EMP WHERE Dept;",
          "(d) SELECT AVG(Salary) FROM EMP HAVING Dept;"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What is the output of: SELECT MID('INFORMATICS PRACTICES', 3, 5);",
        "answer": "(a) FORMA",
        "explanation": "MID(str, 3, 5) extracts 5 characters starting at index 3: index 3 is 'F', followed by 'O', 'R', 'M', 'A' -> 'FORMA'.",
        "options": [
          "(a) FORMA",
          "(b) INFOR",
          "(c) FORMAT",
          "(d) ORMA"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Can WHERE and HAVING clauses both be used in the same SELECT statement?",
        "answer": "(a) Yes, WHERE filters individual rows before grouping, and HAVING filters grouped results",
        "explanation": "WHERE filters rows before the GROUP BY operation takes place; HAVING filters the groups generated after grouping and aggregate calculations.",
        "options": [
          "(a) Yes, WHERE filters individual rows before grouping, and HAVING filters grouped results",
          "(b) No, only one can be used at a time",
          "(c) Yes, but HAVING must precede WHERE",
          "(d) No, they perform identical functions"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The query `SELECT Dept, SUM(Salary) FROM Emp WHERE SUM(Salary) > 100000 GROUP BY Dept;` will generate an error.\nReason (R): Aggregate functions like SUM() cannot be used in a WHERE clause; they must be evaluated in a HAVING clause.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. The WHERE clause filters individual records before aggregation occurs, so placing aggregate functions in WHERE causes a syntax error. HAVING must be used.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): COUNT(*) and COUNT(column_name) always return identical numeric results.\nReason (R): COUNT(*) counts all rows including those with NULL values, while COUNT(column_name) excludes NULL values.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because if the specified column contains NULLs, COUNT(column_name) will be less than COUNT(*). Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-2",
        "question": "Assertion (A): In an Equi-Join, the join condition compares columns across tables using the '=' comparison operator.\nReason (R): Equi-joins match records with identical key values to combine related rows from two or more relations.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains how Equi-Joins use equality on matching foreign and primary keys.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Scalar functions return a single value for each row in the query result.\nReason (R): Functions like UCASE(), ROUND(), and LENGTH() operate on a single input value per row.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Scalar (single-row) functions operate on each row independently and return one value per row.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The query `SELECT Dept, MAX(Salary) FROM Emp;` without GROUP BY is a valid SQL standard query.\nReason (R): When an aggregate function is used alongside an unaggregated column, GROUP BY on that column is mandatory.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because mixing scalar columns with aggregate functions without GROUP BY is invalid in standard SQL. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "What is the difference between single-row (scalar) functions and aggregate (multiple-row) functions in SQL? Give one example of each.",
        "answer": "Scalar vs Aggregate functions",
        "explanation": "1. Single-row functions [1 Mark]: Operate on a single record at a time and return one result for each row queried. Example: ROUND(), UPPER(), LENGTH().\n2. Aggregate functions [1 Mark]: Operate on multiple values across a group of rows/column and return a single summary value for the entire group. Example: SUM(), AVG(), COUNT()."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Differentiate between WHERE and HAVING clauses in SQL with suitable examples.",
        "answer": "WHERE vs HAVING comparison",
        "explanation": "1. WHERE clause [1 Mark]: Filters individual rows before any grouping or aggregation takes place. Example: `WHERE Salary > 30000`.\n2. HAVING clause [1 Mark]: Filters groups created by the GROUP BY clause based on aggregate conditions. Example: `GROUP BY Dept HAVING AVG(Salary) > 50000`."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Find the output of the following SQL statements:\n(i) SELECT ROUND(87.546, 2);\n(ii) SELECT INSTR('CBSE BOARD EXAMINATION', 'BOARD');\n(iii) SELECT SUBSTR('ARTIFICIAL INTELLIGENCE', 12, 5);",
        "answer": "Outputs of SQL functions",
        "explanation": "(i) 87.55 [1 Mark]\n(ii) 6 [1 Mark]\n(iii) INTELL [1 Mark] (starts at character 12 'I', 5 chars)"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Explain the difference between COUNT(*) and COUNT(column_name) with an example.",
        "answer": "COUNT(*) vs COUNT(column)",
        "explanation": "1. COUNT(*) [1 Mark]: Counts the total number of rows retrieved by the query, including rows with NULL values.\n2. COUNT(column_name) [1 Mark]: Counts only the number of non-NULL values present in the specified column."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Predict the output of the following SQL queries:\n(i) SELECT MOD(17, 4) * POWER(3, 2);\n(ii) SELECT LENGTH(TRIM('   DATABASE   '));\n(iii) SELECT MONTHNAME('2024-10-02');",
        "answer": "Output of SQL expressions",
        "explanation": "(i) MOD(17, 4) = 1; POWER(3, 2) = 9; 1 * 9 = 9 [1 Mark]\n(ii) TRIM produces 'DATABASE' (8 chars); LENGTH = 8 [1 Mark]\n(iii) October [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is an Equi-Join? Write the basic syntax of joining two tables T1 and T2 using an equi-join condition.",
        "answer": "Equi-join definition and syntax",
        "explanation": "1. Definition [1 Mark]: An Equi-Join is a join operation that combines tuples from two relations based on an equality comparison (`=`) between common key attributes.\n2. Syntax [1 Mark]:\n`SELECT T1.col1, T2.col2 FROM T1, T2 WHERE T1.common_key = T2.common_key;`"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write SQL queries for the following:\n(i) Display the current date and system time.\n(ii) Display the day of week for date '2024-12-25'.\n(iii) Round 458.73 to the nearest whole integer.",
        "answer": "SQL queries using built-in functions",
        "explanation": "(i) SELECT NOW(); [1 Mark]\n(ii) SELECT DAYNAME('2024-12-25'); [1 Mark]\n(iii) SELECT ROUND(458.73); (or ROUND(458.73, 0);) [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Consider table ITEM with columns (ItemNo, ItemName, Price, Category). Write a query to find the maximum price and total number of items in each Category.",
        "answer": "GROUP BY query on ITEM",
        "explanation": "SELECT Category, MAX(Price), COUNT(*) \nFROM ITEM \nGROUP BY Category; [2 Marks: 1 Mark for SELECT & aggregates, 1 Mark for GROUP BY]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Give the output of:\n(i) SELECT RIGHT('PROGRAMMING', 4);\n(ii) SELECT MID('NEW DELHI', 5, 5);\n(iii) SELECT UCASE(CONCAT('data', 'base'));",
        "answer": "Outputs of string functions",
        "explanation": "(i) MING [1 Mark]\n(ii) DELHI [1 Mark]\n(iii) DATABASE [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why does the statement `SELECT Dept, AVG(Salary) FROM Emp;` produce an error in standard SQL? How can it be corrected?",
        "answer": "Error explanation and correction",
        "explanation": "1. Error cause [1 Mark]: Dept is an individual scalar column returning multiple values, whereas AVG(Salary) is an aggregate function returning a single summary value.\n2. Correction [1 Mark]: Add `GROUP BY Dept` at the end: `SELECT Dept, AVG(Salary) FROM Emp GROUP BY Dept;`."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Consider the following tables `DOCTOR` and `DEPARTMENT`:\n\nTable: DOCTOR\n| DocID | DocName | DeptID | Salary | Experience |\n| D101 | Dr. Rajesh | 10 | 95000 | 12 |\n| D102 | Dr. Sunita | 20 | 80000 | 8 |\n| D103 | Dr. Vivek | 10 | 110000 | 15 |\n| D104 | Dr. Neha | 30 | 75000 | 6 |\n| D105 | Dr. Amit | 20 | 85000 | 10 |\n\nTable: DEPARTMENT\n| DeptID | DeptName | Block |\n| 10 | Cardiology | A |\n| 20 | Neurology | B |\n| 30 | Pediatrics | C |\n\nWrite SQL queries to:\n(a) Display DocName, DeptName, and Salary of all doctors earning more than ₹80,000.\n(b) Display the total salary and average salary paid to doctors in each department (show DeptID).\n(c) Display DeptName and Doctor count for departments having more than 1 doctor.\n(d) Display the name of doctors sorted in descending order of their Experience.\n(e) Find the maximum salary and minimum salary among all doctors in the Cardiology department.",
        "answer": "SQL queries on DOCTOR and DEPARTMENT tables",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT D.DocName, DP.DeptName, D.Salary \n    FROM DOCTOR D, DEPARTMENT DP \n    WHERE D.DeptID = DP.DeptID AND D.Salary > 80000;\n(b) SELECT DeptID, SUM(Salary), AVG(Salary) \n    FROM DOCTOR \n    GROUP BY DeptID;\n(c) SELECT DP.DeptName, COUNT(D.DocID) \n    FROM DOCTOR D, DEPARTMENT DP \n    WHERE D.DeptID = DP.DeptID \n    GROUP BY DP.DeptName \n    HAVING COUNT(D.DocID) > 1;\n(d) SELECT DocName, Experience FROM DOCTOR ORDER BY Experience DESC;\n(e) SELECT MAX(D.Salary), MIN(D.Salary) \n    FROM DOCTOR D, DEPARTMENT DP \n    WHERE D.DeptID = DP.DeptID AND DP.DeptName = 'Cardiology';"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Given the tables `STUDENT` and `SPORTS`:\n\nTable: STUDENT\n| AdmNo | SName | Class | House |\n| 101 | Rohit | 12 | Red |\n| 102 | Ananya | 11 | Blue |\n| 103 | Varun | 12 | Green |\n| 104 | Meera | 11 | Red |\n\nTable: SPORTS\n| AdmNo | Game | Coach |\n| 101 | Cricket | Mr. Sharma |\n| 103 | Football | Mr. Joseph |\n| 104 | Basketball | Ms. Roy |\n\nWrite SQL queries to:\n(a) Display SName, Class, and Game for all students participating in sports.\n(b) Display SName and Coach for students belonging to the 'Red' house.\n(c) Display the count of students in each Class from table STUDENT.\n(d) Display details of students whose names start with 'A' or 'V'.\n(e) State the degree and cardinality of the Cartesian Product of STUDENT and SPORTS.",
        "answer": "SQL queries and Cartesian product evaluation",
        "explanation": "Marking Scheme:\n(a) SELECT S.SName, S.Class, SP.Game \n    FROM STUDENT S, SPORTS SP \n    WHERE S.AdmNo = SP.AdmNo; [1 Mark]\n(b) SELECT S.SName, SP.Coach \n    FROM STUDENT S, SPORTS SP \n    WHERE S.AdmNo = SP.AdmNo AND S.House = 'Red'; [1 Mark]\n(c) SELECT Class, COUNT(*) FROM STUDENT GROUP BY Class; [1 Mark]\n(d) SELECT * FROM STUDENT WHERE SName LIKE 'A%' OR SName LIKE 'V%'; [1 Mark]\n(e) Cartesian Product: [1 Mark]\n    Degree = 4 + 3 = 7 attributes.\n    Cardinality = 4 × 3 = 12 tuples."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Find the output of the following SQL statements:\n(a) SELECT ROUND(234.678, -1), ROUND(234.678, 2);\n(b) SELECT MOD(27, 4), POWER(4, 3);\n(c) SELECT UCASE(SUBSTR('incredible india', 12, 5));\n(d) SELECT INSTR('ARTIFICIAL INTELLIGENCE', 'TEL');\n(e) SELECT DAYOFMONTH('2024-08-15'), MONTHNAME('2024-08-15');",
        "answer": "Outputs of SQL function statements",
        "explanation": "Marking Scheme (1 Mark each):\n(a) 230 | 234.68\n(b) 3 | 64\n(c) 'INDIA' (SUBSTR extracts 'india', UCASE converts to 'INDIA')\n(d) 14 ('TEL' starts at index 14)\n(e) 15 | August"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Case Study: Bank Account Transaction Analysis\nConsider the table `ACCOUNTS(AccNo, CustName, AccType, Balance, Branch)`.\nSample data contains savings and current accounts across various branches.\n(a) Write a query to display total balance held in each Branch.\n(b) Write a query to display AccType and average balance for account types having more than 5 accounts.\n(c) Write a query to find the maximum balance among accounts in the 'Connaught Place' branch.\n(d) Write a query to display CustName and Balance in descending order of Balance.",
        "answer": "Solutions for Bank Account Analysis queries",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT Branch, SUM(Balance) FROM ACCOUNTS GROUP BY Branch;\n(b) SELECT AccType, AVG(Balance) FROM ACCOUNTS GROUP BY AccType HAVING COUNT(*) > 5;\n(c) SELECT MAX(Balance) FROM ACCOUNTS WHERE Branch = 'Connaught Place';\n(d) SELECT CustName, Balance FROM ACCOUNTS ORDER BY Balance DESC;"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Consider tables `PRODUCT(PID, PName, Price, Company)` and `SALES(SID, PID, QtySold, SaleDate)`.\nWrite SQL queries to:\n(a) Display PName, Company, and QtySold for all sales.\n(b) Display Company name and total quantity sold for each company.\n(c) Display PName and total sales revenue (Price * QtySold) for each product.\n(d) Display details of products that were sold on '2024-01-15'.\n(e) Display PID and number of times each product was sold, but only for products sold more than 3 times.",
        "answer": "SQL queries on PRODUCT and SALES tables",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT P.PName, P.Company, S.QtySold \n    FROM PRODUCT P, SALES S \n    WHERE P.PID = S.PID;\n(b) SELECT P.Company, SUM(S.QtySold) \n    FROM PRODUCT P, SALES S \n    WHERE P.PID = S.PID \n    GROUP BY P.Company;\n(c) SELECT P.PName, SUM(P.Price * S.QtySold) AS TotalRevenue \n    FROM PRODUCT P, SALES S \n    WHERE P.PID = S.PID \n    GROUP BY P.PName;\n(d) SELECT P.* \n    FROM PRODUCT P, SALES S \n    WHERE P.PID = S.PID AND S.SaleDate = '2024-01-15';\n(e) SELECT PID, COUNT(*) \n    FROM SALES \n    GROUP BY PID \n    HAVING COUNT(*) > 3;"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Differentiate between the following with suitable examples:\n(a) Aggregate functions and Scalar functions.\n(b) Equi-Join and Natural Join.\n(c) ORDER BY and GROUP BY clauses.",
        "answer": "Detailed comparison of SQL concepts",
        "explanation": "Marking Scheme:\n(a) Aggregate vs Scalar (2 Marks):\n- Aggregate functions: Calculate a single summary value across a group of rows (e.g., SUM(), COUNT()). [1 Mark]\n- Scalar functions: Evaluate single input row values and return a value for every individual row (e.g., ROUND(), UPPER()). [1 Mark]\n\n(b) Equi-Join vs Natural Join (1.5 Marks):\n- Equi-Join: Uses '=' to match specific columns and retains duplicate column names in the Cartesian intermediate result. [0.75 Mark]\n- Natural Join: Automatically joins on all identically named columns across tables and eliminates redundant duplicate columns. [0.75 Mark]\n\n(c) ORDER BY vs GROUP BY (1.5 Marks):\n- ORDER BY: Sorts the final output records ascending or descending. [0.75 Mark]\n- GROUP BY: Combines rows with identical values in specified columns into summary groups for aggregation. [0.75 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Consider table `EMPLOYEE(EmpNo, Name, Job, HireDate, Salary, Commission, DeptNo)`.\nWrite SQL queries to:\n(a) Display Job and average salary for jobs having average salary greater than 40000.\n(b) Display the highest salary paid in DeptNo 10.\n(c) Display the total commission earned by employees in DeptNo 20 (ignore NULLs).\n(d) Display names of employees hired in the month of December.",
        "answer": "SQL queries on EMPLOYEE table",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT Job, AVG(Salary) FROM EMPLOYEE GROUP BY Job HAVING AVG(Salary) > 40000;\n(b) SELECT MAX(Salary) FROM EMPLOYEE WHERE DeptNo = 10;\n(c) SELECT SUM(Commission) FROM EMPLOYEE WHERE DeptNo = 20;\n(d) SELECT Name FROM EMPLOYEE WHERE MONTH(HireDate) = 12; (or MONTHNAME(HireDate) = 'December')"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Given the schema:\nTEACHER(TID, TName, Subject, Experience)\nASSIGNMENT(TID, Class, Section, HoursPerWeek)\n\nWrite SQL queries to:\n(a) Display TName, Class, Section, and HoursPerWeek for all assignments.\n(b) Display total teaching hours per week for each teacher (show TID).\n(c) Display Subject and count of teachers teaching each subject.\n(d) Display TName of teachers whose Experience is greater than 10 years and who teach Class '12'.\n(e) Display TName in lowercase and length of TName for all teachers.",
        "answer": "SQL queries on TEACHER and ASSIGNMENT",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT T.TName, A.Class, A.Section, A.HoursPerWeek \n    FROM TEACHER T, ASSIGNMENT A \n    WHERE T.TID = A.TID;\n(b) SELECT TID, SUM(HoursPerWeek) \n    FROM ASSIGNMENT \n    GROUP BY TID;\n(c) SELECT Subject, COUNT(*) \n    FROM TEACHER \n    GROUP BY Subject;\n(d) SELECT DISTINCT T.TName \n    FROM TEACHER T, ASSIGNMENT A \n    WHERE T.TID = A.TID AND T.Experience > 10 AND A.Class = '12';\n(e) SELECT LCASE(TName), LENGTH(TName) FROM TEACHER;"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "What is the output of the following SQL expressions?\n(a) SELECT LEFT('INFORMATION', 4), RIGHT('TECHNOLOGY', 4);\n(b) SELECT POWER(MOD(14, 3), 3);\n(c) SELECT LENGTH(LTRIM('   HELLO'));\n(d) SELECT SUBSTR('PRACTICAL EXAM', 11, 4);",
        "answer": "Evaluated output of string and math expressions",
        "explanation": "Marking Scheme (1 Mark each):\n(a) 'INFO' | 'LOGY'\n(b) MOD(14, 3) = 2; POWER(2, 3) = 8\n(c) LTRIM removes 3 leading spaces -> 'HELLO'; LENGTH = 5\n(d) At pos 11 is 'E'; 4 chars gives 'EXAM'"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "Consider table `CAB(CabNo, DriverName, Type, Capacity, BaseFare)`.\nWrite SQL queries to:\n(a) Display Type and average BaseFare for each Type of cab.\n(b) Display DriverName in uppercase and length of DriverName.\n(c) Display count of cabs where Capacity is at least 6 passengers.\n(d) Display Type having maximum BaseFare greater than 500.\n(e) Display details of cabs sorted by Capacity descending, then by BaseFare ascending.",
        "answer": "SQL queries on CAB table",
        "explanation": "Marking Scheme (1 Mark each):\n(a) SELECT Type, AVG(BaseFare) FROM CAB GROUP BY Type;\n(b) SELECT UCASE(DriverName), LENGTH(DriverName) FROM CAB;\n(c) SELECT COUNT(*) FROM CAB WHERE Capacity >= 6;\n(d) SELECT Type, MAX(BaseFare) FROM CAB GROUP BY Type HAVING MAX(BaseFare) > 500;\n(e) SELECT * FROM CAB ORDER BY Capacity DESC, BaseFare ASC;"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "unit_num": 3,
      "title": "Interface Python with MySQL",
      "unit_title": "Unit III: Database Management",
      "weightage_unit": "20 Marks Unit"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which Python module is officially used to establish an interface between Python and MySQL in CBSE Class 12?",
        "answer": "(a) mysql.connector",
        "explanation": "The standard module prescribed in CBSE Class 12 Computer Science is `mysql.connector`.",
        "options": [
          "(a) mysql.connector",
          "(b) pymysql.db",
          "(c) sqlite3",
          "(d) python.sql"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which method of the connection object is used to create a cursor object to execute SQL statements?",
        "answer": "(a) con.cursor()",
        "explanation": "The `cursor()` method of the connection object instantiates and returns a cursor object used to execute SQL queries and retrieve results.",
        "options": [
          "(a) con.cursor()",
          "(b) con.create_cursor()",
          "(c) con.get_cursor()",
          "(d) con.execute()"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which method of the cursor object returns all remaining rows of a query result as a list of tuples?",
        "answer": "(a) fetchall()",
        "explanation": "`cursor.fetchall()` fetches all remaining rows of a query result set and returns them as a list of tuples. If no rows remain, it returns an empty list `[]`.",
        "options": [
          "(a) fetchall()",
          "(b) fetchone()",
          "(c) fetchmany()",
          "(d) fetchrows()"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why is the `commit()` method necessary after executing an INSERT, UPDATE, or DELETE query in Python-MySQL?",
        "answer": "(a) To save and make changes permanent in the database",
        "explanation": "By default, Python-MySQL connections do not autocommit DML modifications. Calling `con.commit()` commits the transaction, ensuring modifications are permanently saved.",
        "options": [
          "(a) To save and make changes permanent in the database",
          "(b) To execute the SQL statement",
          "(c) To close the database connection",
          "(d) To create a new transaction"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What is the return type of `cursor.fetchone()` when a row is retrieved?",
        "answer": "(a) Tuple",
        "explanation": "`cursor.fetchone()` returns the next row of a query result set as a tuple. If no more rows are available, it returns `None`.",
        "options": [
          "(a) Tuple",
          "(b) List",
          "(c) Dictionary",
          "(d) String"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What does `cursor.fetchone()` return if there are no more rows left to fetch?",
        "answer": "(a) None",
        "explanation": "When all rows in the active result set have been exhausted, `cursor.fetchone()` returns `None`.",
        "options": [
          "(a) None",
          "(b) () (empty tuple)",
          "(c) [] (empty list)",
          "(d) Raises an exception"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which parameter in `mysql.connector.connect()` specifies the database host machine name or IP?",
        "answer": "(a) host",
        "explanation": "The connection parameter is named `host` (typically set to 'localhost' or '127.0.0.1' for a local server).",
        "options": [
          "(a) host",
          "(b) server",
          "(c) hostname",
          "(d) machine"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which attribute of the cursor object returns the number of rows affected or retrieved by the last executed query?",
        "answer": "(a) rowcount",
        "explanation": "`cursor.rowcount` is a read-only attribute that stores the number of rows affected by a DML statement or fetched by a SELECT query.",
        "options": [
          "(a) rowcount",
          "(b) count",
          "(c) affected_rows",
          "(d) total_rows"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which placeholder symbol is used in SQL parameterized queries with `mysql.connector` to prevent SQL injection?",
        "answer": "(a) %s",
        "explanation": "The standard parameter placeholder format for MySQL Connector/Python is `%s` regardless of whether the parameter is string, integer, or date.",
        "options": [
          "(a) %s",
          "(b) ?",
          "(c) :val",
          "(d) $1"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which method is used to fetch a specified number of rows `n` from the active query result set?",
        "answer": "(a) cursor.fetchmany(n)",
        "explanation": "`cursor.fetchmany(size)` returns a list containing up to `size` rows of a query result.",
        "options": [
          "(a) cursor.fetchmany(n)",
          "(b) cursor.fetchn(n)",
          "(c) cursor.fetch(n)",
          "(d) cursor.get(n)"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which method of the connection object verifies whether the connection to the MySQL server is currently active?",
        "answer": "(a) is_connected()",
        "explanation": "`con.is_connected()` returns `True` if the connection to the MySQL database server is alive and open, otherwise `False`.",
        "options": [
          "(a) is_connected()",
          "(b) is_active()",
          "(c) check_connection()",
          "(d) ping()"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which cursor method is used to execute a parameterized SQL query across multiple sets of parameters in a single call?",
        "answer": "(a) executemany()",
        "explanation": "`cursor.executemany(operation, seq_of_params)` prepares an SQL query and executes it against all parameter tuples in a sequence.",
        "options": [
          "(a) executemany()",
          "(b) execute_all()",
          "(c) execute_batch()",
          "(d) execute_multiple()"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the return type of `cursor.fetchall()`?",
        "answer": "(a) List of tuples",
        "explanation": "`fetchall()` returns a Python `list` where each element represents a database row as a `tuple`.",
        "options": [
          "(a) List of tuples",
          "(b) List of strings",
          "(c) Dictionary of lists",
          "(d) Tuple of tuples"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which method is called on the connection object to undo all database modifications performed in the current transaction?",
        "answer": "(a) con.rollback()",
        "explanation": "`con.rollback()` rolls back the current database transaction, reverting all uncommitted modifications.",
        "options": [
          "(a) con.rollback()",
          "(b) con.undo()",
          "(c) con.revert()",
          "(d) con.cancel()"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What happens if you execute a SELECT query and then close the connection without calling `con.commit()`?",
        "answer": "(a) Query data was already read; commit is not required for SELECT",
        "explanation": "SELECT statements only read/query data from the database without modifying table states; hence `commit()` is neither needed nor applicable.",
        "options": [
          "(a) Query data was already read; commit is not required for SELECT",
          "(b) An error is raised",
          "(c) The fetched data is lost",
          "(d) The database rolls back the read"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following is the correct syntax to connect to a MySQL database named 'School'?",
        "answer": "(a) con = mysql.connector.connect(host='localhost', user='root', password='mypassword', database='School')",
        "explanation": "The `connect()` method inside `mysql.connector` takes keyword arguments: `host`, `user`, `password`, and `database`.",
        "options": [
          "(a) con = mysql.connector.connect(host='localhost', user='root', password='mypassword', database='School')",
          "(b) con = mysql.connector.open('School', 'root', 'mypassword')",
          "(c) con = mysql.connect('localhost', 'root', 'mypassword', 'School')",
          "(d) con = mysql.connector(database='School')"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the primary role of a Cursor object in database programming?",
        "answer": "(a) It acts as a control structure to navigate and manipulate rows of a result set",
        "explanation": "A database cursor is a pointer/handle that enables SQL execution, iteration, and record-by-record processing of query results.",
        "options": [
          "(a) It acts as a control structure to navigate and manipulate rows of a result set",
          "(b) It establishes the physical network socket to MySQL",
          "(c) It configures MySQL server passwords",
          "(d) It formats Python code"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which exception class in `mysql.connector` is raised when a database error (e.g. access denied, syntax error) occurs?",
        "answer": "(a) mysql.connector.Error",
        "explanation": "`mysql.connector.Error` is the base exception class for all errors originating from MySQL Connector/Python.",
        "options": [
          "(a) mysql.connector.Error",
          "(b) mysql.connector.DatabaseException",
          "(c) mysql.connector.SQLError",
          "(d) mysql.connector.Failed"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "To release database server resources after operations are completed, which method should be called?",
        "answer": "(a) close()",
        "explanation": "Both cursor and connection objects provide a `close()` method to clean up resources and terminate server communication.",
        "options": [
          "(a) close()",
          "(b) disconnect()",
          "(c) exit()",
          "(d) stop()"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Consider the code:\n`cur.execute('SELECT * FROM Student')`\n`res = cur.fetchall()`\nIf table Student has 0 rows, what is the value of `res`?",
        "answer": "(a) [] (an empty list)",
        "explanation": "`fetchall()` returns an empty list `[]` when no rows match the query or when the table is empty.",
        "options": [
          "(a) [] (an empty list)",
          "(b) None",
          "(c) () (empty tuple)",
          "(d) Error"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Consider the code:\n`cur.execute('SELECT * FROM Student')`\n`row = cur.fetchone()`\nIf table Student is empty, what is the value of `row`?",
        "answer": "(a) None",
        "explanation": "`fetchone()` returns `None` if the query produces no rows or if all rows have already been fetched.",
        "options": [
          "(a) None",
          "(b) []",
          "(c) ()",
          "(d) Error"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In the query `cur.execute(\"INSERT INTO Book VALUES (%s, %s, %s)\", (101, 'Python', 450))`, why is the second argument passed as a tuple?",
        "answer": "(a) To provide values for the parameterized placeholders safely",
        "explanation": "Passing query parameters as a tuple/sequence to `execute()` ensures safe type-casting, proper escaping, and prevention of SQL injection.",
        "options": [
          "(a) To provide values for the parameterized placeholders safely",
          "(b) Because SQL only accepts tuples",
          "(c) Because %s is a tuple operator",
          "(d) To create a new column"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is the effect of setting `autocommit=True` in `connect()`?",
        "answer": "(a) DML statements are committed automatically without needing con.commit()",
        "explanation": "When `autocommit` is enabled on the connection, every successful DML query automatically commits changes to disk.",
        "options": [
          "(a) DML statements are committed automatically without needing con.commit()",
          "(b) Queries are executed faster",
          "(c) DDL statements are forbidden",
          "(d) Python closes the connection automatically"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-2",
        "question": "What is the output of `cur.rowcount` immediately after executing `cur.execute('UPDATE Emp SET Salary = Salary + 1000 WHERE Dept = \"HR\"')` if 4 HR employees were updated?",
        "answer": "(a) 4",
        "explanation": "`rowcount` reflects the number of records modified by an UPDATE statement, which is 4.",
        "options": [
          "(a) 4",
          "(b) 1",
          "(c) 0",
          "(d) None"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following creates a dictionary cursor returning rows as dictionaries instead of tuples?",
        "answer": "(a) cur = con.cursor(dictionary=True)",
        "explanation": "Passing `dictionary=True` to `cursor()` configures the cursor to return rows as dictionaries mapping column names to values.",
        "options": [
          "(a) cur = con.cursor(dictionary=True)",
          "(b) cur = con.dict_cursor()",
          "(c) cur = con.cursor('dict')",
          "(d) cur = con.cursor(type=dict)"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Calling `con.commit()` is required after executing an `INSERT INTO` statement in Python.\nReason (R): In `mysql.connector`, database transactions do not commit modifications automatically by default.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Because autocommit is disabled by default, modifications remain uncommitted in memory until `commit()` is called.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): `cursor.fetchall()` loads all rows matching a query into Python memory at once.\nReason (R): For extremely large datasets with millions of rows, fetching all rows at once can cause significant memory overhead.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. `fetchall()` loads all matching rows into memory at once, which can consume large amounts of RAM for massive datasets, making `fetchone()` or `fetchmany()` preferable.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-2",
        "question": "Assertion (A): Parameterized queries using `%s` placeholders are recommended over string concatenation (`f'INSERT ... {val}'`).\nReason (R): Parameterized queries protect the database against SQL Injection attacks and handle data escaping automatically.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the security benefits of using parameterized queries to prevent SQL injection.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Calling `commit()` is mandatory after executing `SELECT * FROM Student`.\nReason (R): SELECT queries retrieve data from the database and do not modify the database state.",
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE because SELECT queries do not modify data, so `commit()` is unnecessary. Reason R is TRUE.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): `con.is_connected()` returns `False` if the connection could not be established or has been closed.\nReason (R): It sends a ping to the server to check whether the TCP connection is still open and functioning.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains how `is_connected()` verifies the connection status.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Write the Python code to import the MySQL connector module and establish a connection to a database named 'HospitalDB' on localhost using username 'admin' and password 'med123'.",
        "answer": "Python-MySQL connection snippet",
        "explanation": "import mysql.connector\n\ncon = mysql.connector.connect(\n    host='localhost',\n    user='admin',\n    password='med123',\n    database='HospitalDB'\n)\n[1 Mark for import statement, 1 Mark for connect() call with correct parameters]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Differentiate between `cursor.fetchone()` and `cursor.fetchall()` methods with respect to return type and behavior when no rows are available.",
        "answer": "fetchone() vs fetchall() comparison",
        "explanation": "1. `cursor.fetchone()` [1 Mark]: Returns the next single row as a `tuple`. If no more rows are available, it returns `None`.\n2. `cursor.fetchall()` [1 Mark]: Returns all remaining rows as a `list of tuples`. If no rows are available, it returns an empty list `[]`."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Why is `con.commit()` used in Python-MySQL interface? What will happen if a programmer executes an UPDATE statement without calling `commit()`?",
        "answer": "Importance of commit() method",
        "explanation": "1. Purpose of commit() [1.5 Marks]: In MySQL Connector, autocommit is turned off by default. `con.commit()` commits the active database transaction, permanently writing all DML modifications (INSERT, UPDATE, DELETE) to the database storage.\n2. Omitting commit() [1.5 Marks]: The updates will remain only in temporary transaction memory. When the connection closes or Python exits, the modifications will be rolled back, leaving the database unchanged."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Write the Python statement to create a cursor object from a connection named `mycon`, and use it to execute the query `SELECT * FROM Employee`.",
        "answer": "Cursor creation and query execution",
        "explanation": "mycur = mycon.cursor()          # [1 Mark: Cursor creation]\nmycur.execute('SELECT * FROM Employee')  # [1 Mark: Query execution]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Consider the following code snippet:\ncur.execute('SELECT RollNo, Name, Marks FROM Student WHERE Marks > 90')\ndata = cur.fetchmany(3)\nfor row in data:\n    print(row[1], row[2])\n(i) What is the data type of `data`?\n(ii) What is the data type of `row`?\n(iii) What will be printed if no student has marks > 90?",
        "answer": "Analysis of fetchmany code snippet",
        "explanation": "(i) `data` is of type `list`. [1 Mark]\n(ii) `row` is of type `tuple`. [1 Mark]\n(iii) Nothing will be printed because `data` will be an empty list `[]` and the loop body will not execute. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Explain the role of `cursor.rowcount` in Python-MySQL programming with an example.",
        "answer": "Explanation of cursor.rowcount",
        "explanation": "1. Role [1 Mark]: `cursor.rowcount` is a read-only attribute that stores the number of rows affected by the last executed DML query (such as INSERT, UPDATE, or DELETE).\n2. Example [1 Mark]:\ncur.execute(\"DELETE FROM Student WHERE Marks < 40\")\nprint(f\"{cur.rowcount} records deleted.\")"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write a Python function `display_teachers()` that connects to MySQL database 'School', selects all records from table `TEACHER`, and displays them row by row.",
        "answer": "Python function to display records",
        "explanation": "import mysql.connector\n\ndef display_teachers():\n    con = mysql.connector.connect(host='localhost', user='root', password='', database='School')\n    cur = con.cursor()\n    cur.execute('SELECT * FROM TEACHER')\n    records = cur.fetchall()\n    for rec in records:\n        print(rec)\n    cur.close()\n    con.close()\n[1 Mark for connection & cursor, 1 Mark for execute & fetchall, 1 Mark for iteration & closing]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is SQL Injection? How do parameterized queries in `mysql.connector` protect against it?",
        "answer": "SQL Injection and parameterized query defense",
        "explanation": "1. SQL Injection [1 Mark]: A cyber security vulnerability where malicious SQL commands are inserted into user input fields to manipulate database queries.\n2. Defense [1 Mark]: Using parameterized queries with `%s` placeholders separates the SQL command structure from user data. The connector automatically escapes dangerous characters, treating input strictly as literal values rather than executable code."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Given a list of tuples containing employee data:\n`emp_data = [(101, 'Aman', 45000), (102, 'Bhavna', 52000), (103, 'Chetan', 48000)]`\nWrite Python code to insert all these records into table `EMPLOYEE` in one single operation.",
        "answer": "executemany snippet",
        "explanation": "query = 'INSERT INTO EMPLOYEE (EmpID, Name, Salary) VALUES (%s, %s, %s)'\ncur.executemany(query, emp_data)  # [2 Marks: correct executemany with parameterized query]\ncon.commit()                       # [1 Mark: commit statement]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why is it important to wrap database connection operations inside a `try...except` block? Give an example.",
        "answer": "Exception handling in database operations",
        "explanation": "1. Importance [1 Mark]: Database connectivity can fail due to invalid credentials, unreachable server, or missing database. Handling `mysql.connector.Error` prevents program crashes and provides graceful error diagnostics.\n2. Example [1 Mark]:\ntry:\n    con = mysql.connector.connect(host='localhost', user='root', password='abc')\nexcept mysql.connector.Error as err:\n    print(f'Database Connection Error: {err}')"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Write a complete Python program with a user-defined function `insert_student()` to accept student details (RollNo, Name, Stream, Percentage) from the user and insert the record into table `STUDENT` in MySQL database `SchoolDB`. Ensure that changes are permanently saved and proper messages are displayed on success or failure.",
        "answer": "Complete Python program for inserting student record",
        "explanation": "Marking Scheme:\n1. Import and database connection [1.5 Marks]:\nimport mysql.connector\n\ndef insert_student():\n    try:\n        con = mysql.connector.connect(\n            host='localhost',\n            user='root',\n            password='password',\n            database='SchoolDB'\n        )\n        cur = con.cursor()\n2. User input and parameterized query [2 Marks]:\n        roll = int(input('Enter Roll Number: '))\n        name = input('Enter Student Name: ')\n        stream = input('Enter Stream: ')\n        pct = float(input('Enter Percentage: '))\n\n        query = 'INSERT INTO STUDENT VALUES (%s, %s, %s, %s)'\n        data = (roll, name, stream, pct)\n        cur.execute(query, data)\n3. Commit, closing, and exception handling [1.5 Marks]:\n        con.commit()\n        print('Record inserted successfully!')\n    except mysql.connector.Error as err:\n        print(f'Error occurred: {err}')\n    finally:\n        if 'con' in locals() and con.is_connected():\n            cur.close()\n            con.close()\n\ninsert_student()"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Write a Python program to perform the following operations on table `ITEM(ItemNo, ItemName, Price, Quantity)` in database `StoreDB`:\n(a) Display all items whose price is greater than ₹500.\n(b) Increase the price of all items whose quantity is less than 10 by 15%.\n(c) Display the count of updated rows.",
        "answer": "Python program for query and update operations",
        "explanation": "Marking Scheme:\nimport mysql.connector\n\ndef manage_store():\n    con = mysql.connector.connect(\n        host='localhost', user='root', password='', database='StoreDB'\n    )\n    cur = con.cursor()\n\n    # (a) Display items with price > 500 [2 Marks]\n    print('--- Items with Price > 500 ---')\n    cur.execute('SELECT * FROM ITEM WHERE Price > 500')\n    records = cur.fetchall()\n    for row in records:\n        print(f'ItemNo: {row[0]}, Name: {row[1]}, Price: {row[2]}, Qty: {row[3]}')\n\n    # (b) Increase price by 15% where Quantity < 10 [2 Marks]\n    update_query = 'UPDATE ITEM SET Price = Price * 1.15 WHERE Quantity < 10'\n    cur.execute(update_query)\n    con.commit()\n\n    # (c) Display count of updated rows [1 Mark]\n    print(f'Total records updated: {cur.rowcount}')\n\n    cur.close()\n    con.close()\n\nmanage_store()"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Write a Python function `search_employee(dept_name)` that accepts a department name as argument, connects to database `CompanyDB`, and searches table `EMPLOYEE(EmpID, EmpName, Department, Salary)`.\n- If matching employees exist, display their details in a tabular format and print total salary paid to that department.\n- If no employee is found in that department, display 'No employee found in department <dept_name>'.",
        "answer": "Python search function with conditional display",
        "explanation": "Marking Scheme:\nimport mysql.connector\n\ndef search_employee(dept_name):\n    try:\n        con = mysql.connector.connect(host='localhost', user='root', password='', database='CompanyDB')\n        cur = con.cursor()\n        query = 'SELECT EmpID, EmpName, Salary FROM EMPLOYEE WHERE Department = %s'\n        cur.execute(query, (dept_name,))\n        records = cur.fetchall()   # [2 Marks: Parameterized query & fetch]\n\n        if not records:             # [1 Mark: Empty result check]\n            print(f'No employee found in department {dept_name}')\n        else:\n            print(f'Employees in {dept_name}:')\n            print(f'{\"EmpID\":<10}{\"Name\":<20}{\"Salary\":<10}')\n            print('-' * 40)\n            total_sal = 0\n            for row in records:     # [1.5 Marks: Tabular display & total calculation]\n                print(f'{row[0]:<10}{row[1]:<20}{row[2]:<10}')\n                total_sal += row[2]\n            print(f'Total Salary for {dept_name}: ₹{total_sal}')\n        cur.close()\n        con.close()\n    except mysql.connector.Error as err:\n        print(f'Database Error: {err}') # [0.5 Mark: Exception handling]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Case Study: Library Book Management System\nA school librarian wants a Python script to manage book records in MySQL database `LibraryDB` table `BOOK(BookID, Title, Author, Status)` where Status is either 'Available' or 'Issued'.\n(a) Write the Python statement to connect to the database.\n(b) Write Python code to display all books currently marked as 'Issued'.\n(c) Write Python code to update the Status of BookID 105 to 'Available'.\n(d) Which method must be called to ensure the status change in (c) persists in the database?",
        "answer": "Solutions for Library Management Case Study",
        "explanation": "Marking Scheme:\n(a) `con = mysql.connector.connect(host='localhost', user='root', password='', database='LibraryDB')` [1 Mark]\n(b) [1 Mark]:\ncur = con.cursor()\ncur.execute(\"SELECT * FROM BOOK WHERE Status = 'Issued'\")\nfor b in cur.fetchall():\n    print(b)\n(c) [1 Mark]:\ncur.execute(\"UPDATE BOOK SET Status = 'Available' WHERE BookID = 105\")\n(d) `con.commit()` [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Write a Python program to delete a record from table `STUDENT` based on Roll Number entered by the user. If the record exists, delete it, commit changes, and print 'Student record deleted successfully'. If no record exists with that Roll Number, print 'Roll Number not found'.",
        "answer": "Python program for record deletion with existence check",
        "explanation": "Marking Scheme:\nimport mysql.connector\n\ndef delete_student():\n    try:\n        con = mysql.connector.connect(host='localhost', user='root', password='', database='SchoolDB')\n        cur = con.cursor()\n        rno = int(input('Enter Roll Number to delete: '))\n\n        # First check if record exists [2 Marks]\n        cur.execute('SELECT * FROM STUDENT WHERE RollNo = %s', (rno,))\n        record = cur.fetchone()\n\n        if record is None:\n            print(f'Roll Number {rno} not found.')\n        else:\n            # Delete the record [2 Marks]\n            cur.execute('DELETE FROM STUDENT WHERE RollNo = %s', (rno,))\n            con.commit()\n            print('Student record deleted successfully.')\n        \n        cur.close()\n        con.close()\n    except mysql.connector.Error as e:\n        print('Error:', e)  # [1 Mark: Exception handling]\n\ndelete_student()"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Explain the sequence of steps required to connect Python with a MySQL database and retrieve records.\n(b) Write a code snippet demonstrating the execution of a parameterized query with `%s` placeholders.",
        "answer": "(a) Steps for database connectivity; (b) Parameterized query example",
        "explanation": "Marking Scheme:\n(a) Steps to connect and retrieve records (3 Marks):\n1. Import the connector module (`import mysql.connector`). [0.5 Mark]\n2. Establish connection using `mysql.connector.connect(...)`. [0.5 Mark]\n3. Create a cursor object using `con.cursor()`. [0.5 Mark]\n4. Execute SQL query using `cursor.execute(sql)`. [0.5 Mark]\n5. Extract records using `cursor.fetchall()` or `cursor.fetchone()`. [0.5 Mark]\n6. Close cursor and connection using `close()`. [0.5 Mark]\n\n(b) Parameterized Query Snippet (2 Marks):\nsql = 'SELECT * FROM Emp WHERE Dept = %s AND Salary >= %s'\nparams = ('Sales', 40000)\ncur.execute(sql, params)\nfor row in cur.fetchall():\n    print(row)"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Consider the following code written by a student to fetch student records:\nimport mysql.connector\ncon = mysql.connector.connect(host='localhost', user='root', database='School')\ncur = con.cursor()\ncur.execute('SELECT * FROM Student')\nwhile True:\n    row = cur.fetchone()\n    # Missing condition\n    print(row)\n(i) Identify the missing condition to break the infinite while loop.\n(ii) Rewrite the loop correctly.\n(iii) What will `row` contain on the first iteration if the table has data?",
        "answer": "Code debugging and correction for fetchone loop",
        "explanation": "Marking Scheme:\n(i) Missing condition: Check if `row is None`. [1 Mark]\n(ii) Corrected loop: [2 Marks]\nwhile True:\n    row = cur.fetchone()\n    if row is None:\n        break\n    print(row)\n(iii) On the first iteration, `row` contains a tuple representing the first record of table `Student`. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Write a Python program to create a new MySQL table `PRODUCT` in database `InventoryDB` with the following columns:\n- PID (INT, PRIMARY KEY)\n- PName (VARCHAR(30))\n- Price (DECIMAL(8, 2))\n- Qty (INT)\nAfter creating the table, insert one sample record: `(101, 'Wireless Mouse', 650.00, 25)` and commit.",
        "answer": "Python script to create table and insert record",
        "explanation": "Marking Scheme:\nimport mysql.connector\n\ncon = mysql.connector.connect(\n    host='localhost', user='root', password='', database='InventoryDB'\n)\ncur = con.cursor()\n\n# 1. CREATE TABLE statement [2.5 Marks]\ncreate_tbl = '''\nCREATE TABLE IF NOT EXISTS PRODUCT (\n    PID INT PRIMARY KEY,\n    PName VARCHAR(30),\n    Price DECIMAL(8, 2),\n    Qty INT\n)\n'''\ncur.execute(create_tbl)\nprint('Table PRODUCT created successfully.')\n\n# 2. INSERT statement and commit [2.5 Marks]\ninsert_sql = 'INSERT INTO PRODUCT VALUES (%s, %s, %s, %s)'\nrecord = (101, 'Wireless Mouse', 650.00, 25)\ncur.execute(insert_sql, record)\ncon.commit()\nprint('Sample record inserted successfully.')\n\ncur.close()\ncon.close()"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Write a Python function `update_marks(roll, new_marks)` that takes a student's roll number and updated marks, connects to MySQL database `ExamDB`, updates the marks in table `STUDENT`, and prints the number of rows affected.",
        "answer": "Python update function with rowcount",
        "explanation": "Marking Scheme:\nimport mysql.connector\n\ndef update_marks(roll, new_marks):\n    try:\n        con = mysql.connector.connect(host='localhost', user='root', password='', database='ExamDB')\n        cur = con.cursor()\n        sql = 'UPDATE STUDENT SET Marks = %s WHERE RollNo = %s'\n        cur.execute(sql, (new_marks, roll))  # [2 Marks: Parameterized update]\n        con.commit()                         # [1 Mark: commit]\n        print(f'{cur.rowcount} record(s) updated.') # [1 Mark: rowcount display]\n        cur.close()\n        con.close()\n    except mysql.connector.Error as err:\n        print(f'Error: {err}')"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the difference between `cursor.fetchall()` and `cursor.fetchmany(size)`.\n(b) Write a Python script to connect to database `BankDB`, fetch 5 customer records at a time from table `CUSTOMER(AccNo, Name, Balance)` using `fetchmany()`, and print them until all records are exhausted.",
        "answer": "(a) fetchall vs fetchmany; (b) Python batch fetching script",
        "explanation": "Marking Scheme:\n(a) Difference (2 Marks):\n- `fetchall()` retrieves all remaining rows of the result set in one single list. [1 Mark]\n- `fetchmany(size)` retrieves up to `size` rows at a time, facilitating batch processing of large result sets without exhausting memory. [1 Mark]\n\n(b) Python Script (3 Marks):\nimport mysql.connector\n\ncon = mysql.connector.connect(host='localhost', user='root', password='', database='BankDB')\ncur = con.cursor()\ncur.execute('SELECT AccNo, Name, Balance FROM CUSTOMER')\n\nwhile True:\n    batch = cur.fetchmany(5)\n    if not batch:\n        break\n    print('--- New Batch of 5 Records ---')\n    for cust in batch:\n        print(cust)\n\ncur.close()\ncon.close()"
      }
    ]
  }
];
