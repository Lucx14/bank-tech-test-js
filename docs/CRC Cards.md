### class responsibility card

```

| Account class                    |
|----------------------------------|
| Responsibility  | Collaborator   |
|-----------------|----------------|
| .balance        | Printer module |
| .deposit        | Transaction    |
| .withdrawal     |                |
| .statement      |                |


| Printer module                        |
|---------------------------------------|
| Responsibility      |  Collaborator   |
|---------------------|-----------------|
| .print_headers      |                 |
| .print_transactions |                 |
|                     |                 |



| Transaction class                     |
|---------------------------------------|
| Responsibility      |  Collaborator   |
|---------------------|-----------------|
| .builds_transaction |                 |
|                     |                 |
|                     |                 |




```