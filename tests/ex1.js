<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <form id="todoForm">
        <label for="taskInput">New Task:</label>
        <input type="text" id="taskInput" required>
        <button type="submit">Add</button>
    </form>
    <ul id="taskList"></ul>

    <script>
        const todoForm = document.getElementById('todoForm');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        todoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                const taskItem = document.createElement('li');
                taskItem.textContent = taskText;
                taskList.appendChild(taskItem);
                taskInput.value = '';
            }
        });
    </script>
</body>
</html>
----calculadora---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Simple</title>
    <style>
        #calculator {
            width: 200px;
            border: 1px solid #ccc;
            padding: 10px;
            margin: 0 auto;
            text-align: center;
        }
        #screen {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
        }
        button {
            width: 40px;
            height: 40px;
            margin: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div id="calculator">
        <div id="screen"></div>
        <button onclick="addToScreen('7')">7</button>
        <button onclick="addToScreen('8')">8</button>
        <button onclick="addToScreen('9')">9</button>
        <button onclick="addToScreen('+')">+</button><br>
        <button onclick="addToScreen('4')">4</button>
        <button onclick="addToScreen('5')">5</button>
        <button onclick="addToScreen('6')">6</button>
        <button onclick="addToScreen('-')">-</button><br>
        <button onclick="addToScreen('1')">1</button>
        <button onclick="addToScreen('2')">2</button>
        <button onclick="addToScreen('3')">3</button>
        <button onclick="addToScreen('*')">*</button><br>
        <button onclick="addToScreen('0')">0</button>
        <button onclick="clearScreen()">C</button>
        <button onclick="calculateResult()">=</button>
        <button onclick="addToScreen('/')">/</button><br>
    </div>

    <script>
        const screen = document.getElementById('screen');

        function addToScreen(value) {
            screen.textContent += value;
        }

        function clearScreen() {
            screen.textContent = '';
        }

        function calculateResult() {
            try {
                const result = eval(screen.textContent);
                screen.textContent = result;
            } catch (error) {
                screen.textContent = 'Error';
            }
        }
    </script>
</body>
</html>
----formularis,calidacio-----
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Usuario</title>
    <style>
        .error { color: red; }
    </style>
</head>
<body>
    <h1>Registro de Usuario</h1>
    <form id="registrationForm">
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" required><br>
        <span id="usernameError" class="error"></span><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" required><br>
        <span id="emailError" class="error"></span><br>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" required><br>
        <span id="passwordError" class="error"></span><br>

        <button type="submit">Registrarse</button>
    </form>

    <div id="userInfo"></div>

    <script>
        const registrationForm = document.getElementById('registrationForm');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const userInfo = document.getElementById('userInfo');

        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            let isValid = true;

            if (username.length < 3) {
                usernameError.textContent = 'El nombre de usuario debe tener al menos 3 caracteres.';
                isValid = false;
            } else {
                usernameError.textContent = '';
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = 'Ingrese un correo electrónico válido.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            if (password.length < 6) {
                passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (isValid) {
                // Guardar los datos del usuario localmente
                const userData = {
                    username: username,
                    email: email,
                    password: password
                };
                localStorage.setItem('userData', JSON.stringify(userData));

                // Mostrar los datos del usuario en la página
                userInfo.textContent = `Usuario Registrado:
                Nombre de Usuario: ${userData.username}
                Correo Electrónico: ${userData.email}`;
            }
        });

        // Mostrar los datos del usuario almacenados localmente al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            const storedUserData = JSON.parse(localStorage.getItem('userData'));
            if (storedUserData) {
                userInfo.textContent = `Usuario Registrado:
                Nombre de Usuario: ${storedUserData.username}
                Correo Electrónico: ${storedUserData.email}`;
            }
        });
    </script>
</body>
</html>
---Llista de compra---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Compras</title>
</head>
<body>
    <h1>Lista de Compras</h1>
    <form id="addItemForm">
        <label for="itemName">Producto:</label>
        <input type="text" id="itemName" required>
        <label for="itemQuantity">Cantidad:</label>
        <input type="number" id="itemQuantity" min="1" value="1" required>
        <button type="submit">Agregar</button>
    </form>
    <ul id="shoppingList"></ul>
    <p>Total de Productos: <span id="totalProducts">0</span></p>
    <p>Cantidad Total: <span id="totalQuantity">0</span></p>

    <script>
        const addItemForm = document.getElementById('addItemForm');
        const itemNameInput = document.getElementById('itemName');
        const itemQuantityInput = document.getElementById('itemQuantity');
        const shoppingList = document.getElementById('shoppingList');
        const totalProducts = document.getElementById('totalProducts');
        const totalQuantity = document.getElementById('totalQuantity');
        let totalItems = 0;

        addItemForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const itemName = itemNameInput.value.trim();
            const itemQuantity = parseInt(itemQuantityInput.value);

            if (itemName && itemQuantity > 0) {
                const listItem = document.createElement('li');
                listItem.textContent = `${itemName}: ${itemQuantity}`;
                shoppingList.appendChild(listItem);
                totalItems += itemQuantity;
                updateTotals();
                itemNameInput.value = '';
                itemQuantityInput.value = '1';
            }
        });

        shoppingList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                event.target.remove();
                const [_, quantity] = event.target.textContent.split(':');
                totalItems -= parseInt(quantity.trim());
                updateTotals();
            }
        });

        function updateTotals() {
            totalProducts.textContent = shoppingList.children.length;
            totalQuantity.textContent = totalItems;
        }
    </script>
</body>
</html>
---almacanament local----
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <style>
        .task {
            margin-bottom: 10px;
        }
        .completed {
            text-decoration: line-through;
            color: grey;
        }
    </style>
</head>
<body>
    <h1>Lista de Tareas</h1>
    <form id="taskForm">
        <label for="taskInput">Nueva Tarea:</label>
        <input type="text" id="taskInput" required>
        <button type="submit">Agregar</button>
    </form>
    <div id="taskList"></div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const taskForm = document.getElementById('taskForm');
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

            function renderTasks() {
                taskList.innerHTML = '';
                tasks.forEach((task, index) => {
                    const taskElement = document.createElement('div');
                    taskElement.classList.add('task');
                    if (task.completed) {
                        taskElement.classList.add('completed');
                    }
                    taskElement.innerHTML = `
                        <input type="checkbox" ${task.completed ? 'checked' : ''} id="task${index}">
                        <label for="task${index}">${task.name}</label>
                        <button onclick="completeTask(${index})">Completar</button>
                        <button onclick="deleteTask(${index})">Eliminar</button>
                    `;
                    taskList.appendChild(taskElement);
                });
            }

            function completeTask(index) {
                tasks[index].completed = !tasks[index].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            }

            function deleteTask(index) {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            }

            taskForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const newTask = {
                    name: taskInput.value,
                    completed: false
                };
                tasks.push(newTask);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                taskInput.value = '';
                renderTasks();
            });

            renderTasks();
        });
    </script>
</body>
</html>
---Gestio de personatjes starWars---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Wars Characters</title>
</head>
<body>
    <h1>Star Wars Characters</h1>
    <form id="characterForm">
        <label for="nameInput">Name:</label>
        <input type="text" id="nameInput" required><br>
        <label for="speciesInput">Species:</label>
        <input type="text" id="speciesInput" required><br>
        <label for="genderInput">Gender:</label>
        <select id="genderInput" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select><br>
        <button type="submit">Add Character</button>
    </form>
    <ul id="characterList"></ul>

    <script>
        const characterForm = document.getElementById('characterForm');
        const nameInput = document.getElementById('nameInput');
        const speciesInput = document.getElementById('speciesInput');
        const genderInput = document.getElementById('genderInput');
        const characterList = document.getElementById('characterList');

        characterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = nameInput.value.trim();
            const species = speciesInput.value.trim();
            const gender = genderInput.value;
            if (name && species && gender) {
                addCharacter(name, species, gender);
                characterForm.reset();
            }
        });

        function addCharacter(name, species, gender) {
            const characterItem = document.createElement('li');
            characterItem.innerHTML = `
                <strong>Name:</strong> ${name}<br>
                <strong>Species:</strong> ${species}<br>
                <strong>Gender:</strong> ${gender}<br>
                <button onclick="editCharacter(this)">Edit</button>
                <button onclick="deleteCharacter(this)">Delete</button>
            `;
            characterList.appendChild(characterItem);
        }

        function editCharacter(button) {
            const characterItem = button.parentNode;
            const name = characterItem.querySelector('strong:nth-of-type(1)').textContent.slice(6);
            const species = characterItem.querySelector('strong:nth-of-type(2)').textContent.slice(9);
            const gender = characterItem.querySelector('strong:nth-of-type(3)').textContent.slice(8);
            nameInput.value = name;
            speciesInput.value = species;
            genderInput.value = gender;
            characterItem.remove();
        }

        function deleteCharacter(button) {
            const characterItem = button.parentNode;
            characterItem.remove();
        }
    </script>
</body>
</html>
---gestio de tasques--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
</head>
<body>
    <h1>Task Manager</h1>
    <form id="taskForm">
        <label for="taskInput">New Task:</label>
        <input type="text" id="taskInput" required>
        <button type="submit">Add Task</button>
    </form>
    <ul id="taskList"></ul>

    <script>
        const taskForm = document.getElementById('taskForm');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        taskForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskForm.reset();
            }
        });

        function addTask(taskText) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
        }
    </script>
</body>
</html>
--gestio de notes--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note Manager</title>
</head>
<body>
    <h1>Note Manager</h1>
    <form id="noteForm">
        <label for="titleInput">Title:</label>
        <input type="text" id="titleInput" required><br>
        <label for="categoryInput">Category:</label>
        <select id="categoryInput" required>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="other">Other</option>
        </select><br>
        <label for="contentInput">Content:</label><br>
        <textarea id="contentInput" required></textarea><br>
        <button type="submit">Add Note</button>
    </form>
    <ul id="noteList"></ul>

    <script>
        const noteForm = document.getElementById('noteForm');
        const titleInput = document.getElementById('titleInput');
        const categoryInput = document.getElementById('categoryInput');
        const contentInput = document.getElementById('contentInput');
        const noteList = document.getElementById('noteList');

        noteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = titleInput.value.trim();
            const category = categoryInput.value;
            const content = contentInput.value.trim();
            if (title && category && content) {
                addNote(title, category, content);
                noteForm.reset();
            }
        });

        function addNote(title, category, content) {
            const noteItem = document.createElement('li');
            noteItem.innerHTML = `
                <h3>${title}</h3>
                <p><strong>Category:</strong> ${category}</p>
                <p>${content}</p>
                <button onclick="editNote(this)">Edit</button>
                <button onclick="deleteNote(this)">Delete</button>
            `;
            noteList.appendChild(noteItem);
        }

        function editNote(button) {
            const noteItem = button.parentNode;
            const title = noteItem.querySelector('h3').textContent;
            const category = noteItem.querySelector('p:nth-of-type(1)').textContent.slice(10);
            const content = noteItem.querySelector('p:nth-of-type(2)').textContent;
            titleInput.value = title;
            categoryInput.value = category;
            contentInput.value = content;
            noteItem.remove();
        }

        function deleteNote(button) {
            const noteItem = button.parentNode;
            noteItem.remove();
        }
    </script>
</body>
</html>
