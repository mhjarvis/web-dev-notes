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

As n grows, the time to complete the algorithm steadily increases.
