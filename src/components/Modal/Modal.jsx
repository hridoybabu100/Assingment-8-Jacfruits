"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function ContactModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);

    const name = e.target.name.value;
    const image = e.target.image.value;

    // console.log(name, email, image);
    await authClient.updateUser({
      name,
      image,
    });
  };
  return (
    <Modal>
      <Button variant="secondary">
        {" "}
        <BiEdit></BiEdit> Updated Your Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground"></Modal.Icon>
              <Modal.Heading>Updated Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Updated Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Update URL</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Updated Profile
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
