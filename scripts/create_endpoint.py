import os


print("Creating a backend type...")

BASE_FOLDER_PATH = {
    "controllers": "backend/src/controllers",
    "routes": "backend/src/routes/v1",
    "services": "backend/src/services",
    "types": "backend/src/types",
}

# Get user input
name = input("Enter endpoint name: ").strip()
special_chars = "!@#$%^&*()_+=-`~[]{};':\",./<>?"
if not name:
    print("Error: endpoint cannot be empty")
    exit(1)
if any(char in special_chars for char in name):
    print("Error: special characters cannot be in name")
    print("Special characters: ", special_chars)
    exit(1)

def mkDir(file_path):
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

def create_controller():
    controller_path = f"{BASE_FOLDER_PATH['controllers']}/{name}/index.ts"
    mkDir(controller_path)
    controller_name = "".join(word.capitalize() for word in name.split("_"))
    with open(controller_path, "w") as f:
        f.write(
            f"import {{ {controller_name} }} from \"../../types\";\n\n"
            f"export default function normalize_data(): {controller_name} {{\n"
            f"    return [];\n"
            f"}}\n"
        )
    print(f"\n    New file created: {controller_path}")

def create_route():
    route_path = f"{BASE_FOLDER_PATH['routes']}/{name}.ts"
    mkDir(route_path)
    route_name = "".join(word.capitalize() for word in name.split("_"))
    with open(route_path, "w") as f:
        f.write(
            f"import {{ HttpResponseInit, InvocationContext }} from \"@azure/functions\";\n"
            f"import {{ {route_name} }} from \"../../types\";\n"
            f"import normalize_data from \"../../controllers/{name}\";\n\n"
            f"export async function fetch{route_name}(context: InvocationContext): Promise<HttpResponseInit> {{\n"
            f"    let data: {route_name};\n"
            f"    try {{\n"
            f"        data = await normalize_data();\n"
            f"        return {{\n"
            f"            status: 200,\n"
            f"            jsonBody: data\n"
            f"        }};\n"
            f"    }} catch (err) {{\n"
            f"        context.log(\"ERROR: Issue normalizing data:\", err);\n"
            f"        return {{\n"
            f"            status: 500,\n"
            f"            body: \"Server error. Please try again later.\"\n"
            f"        }};\n"
            f"    }}\n"
            f"}}\n"
        )
    print(f"    New file created: {route_path}")

def create_service():
    service_path = f"{BASE_FOLDER_PATH['services']}/{name}/index.ts"
    mkDir(service_path)
    open(service_path, "w")
    print(f"    New file created: {service_path}")

def create_type():
    type_path = f"{BASE_FOLDER_PATH['types']}/{name}.type.ts"
    mkDir(type_path)
    type_name = "".join(word.capitalize() for word in name.split("_"))
    with open(type_path, "w") as f:
        f.write(
            f"export type {type_name} = {{\n\n"
            f"}};\n"
        )
    print(f"    New file created: {type_path}")

create_controller()
create_route()
create_service()
create_type()

print(f"\n{name} files created\n")


print(f'REMINDER: update {BASE_FOLDER_PATH["routes"]}/index.ts')
print(f'REMINDER: update {BASE_FOLDER_PATH["types"]}/index.ts')