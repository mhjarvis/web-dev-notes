<h1 align=center>----- Big-O Notation Primer -----</h1>

The Big-O notation measures the worst-case complexity of an algorithm. In Big-O notation, the _n_ represents the number of inputs. The question that Big-O notation is asking is:

**What will happen as _n_ approaches infinigty?**

<p align=center><img src="https://github.com/mhjarvis/web-dev-notes/blob/main/images/big-o.png" width="800"></p>

## O(1) - Constant Time ('Order 1', 'O of 1', 'big O of 1')
With constant time complexity, the runtime is constaant (independent of the number of input elements (_n_)). This is a constant horizontal line. One example includes:

    function increment(num) {
        return ++num;
    }

Other examples:
* Accessing a specific element in an array of size _n_. Regardlesss of how big the array is, accessing a element via the index will always take the same time.
* Inserting an element at the beginning of a linked list. 
* Pushing/popping on a stack.
* Insertion/removal from a queue.

## O(n) - Linear Time 
Linear time applies to algorithms that must do _n_ operations in the worst-case scenario. A basic example is:

    function linear(n) {
        for(let i = 0; i < n; i++) {
            console.log(i);
        }
    }

As _n_ grows, the time to complete the algorithm linearly and in direct proportion to the size of the input data set. Other examples:
* Sequential search will be O(n), since the algorithm will start at the beginning of an array (for example), and look at each number until it reaches the end of the array (worst-case scenario). 

## O(n^2) - Quadratic Time
Quadratic time represents an algorithm whose performance is directly proportional to the square of the size of the input data set. Common in algorithms using nested iterations. One example is:

    function quadratic(n) {
        for(let i = 0; i < n; i++) {
            console.log(i);
            for(let j = 0; j < n; j++) {
                console.log(j);
            }
        }
    }

Bubble sort would be another example of quadratic time. Here we can also see cubic time, O(n^3). For cubic time, we could use the example of three nested loops.











