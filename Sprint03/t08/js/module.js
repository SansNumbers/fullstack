class LinkedList {
    constructor(data) {
        this.root = null;
        this.size = 0;
    }

    add(value){
        let node = new Node(value);
        let curr;
        if(this.root == null){
            this.root = node;
        }
        else{
            curr = this.root;

            while(curr.next){
                curr = curr.next;
            }

            curr.next = node;
        }
        this.size++;
    }
    remove(value){
        let curr = this.root;
        let prev = null;

        while(curr != null){
            if(curr.data == value){
                if(prev == null){
                    this.root = curr.next;
                } else{
                    prev.next = curr.next;
                }
                this.size--;
            }
            prev = curr;
            curr = curr.next;
        }
    }
    contains(value){
        let curr = this.root;
        while(curr != null){
            if(curr.data == value){
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    count(){
        return this.size;
    }

    clear(){
        let curr = this.root;
        while(curr){
            this.remove(curr.data);
            curr = curr.next;
        }
        this.size = 0;
    }

    log(){
        let res = [];
        let temp = this.root;
        while(temp){
            res.push(temp.data);
            temp = temp.next;
        }
        console.log(`"${res.join(', ')}"`);
    }

    [Symbol.iterator] = function* () {
        let curr = this.root;
        while(curr){
            yield curr.data;
            curr = curr.next;
        }
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export function createLinkedList(arr){
    let ll = new LinkedList();
    let i = 0;
    while(arr[i] != null){
        ll.add(arr[i]);
        i++;
    }
    return ll;
}
