<?php

namespace RestRoutes\Models;

class Endpoint
{

    private $parameters;
    private $capability;
    private $method;
    private $callback;
    private $permissionCallback;
    private $action;
    private $createPost;
    private $displayData;
    private $displayTaxonomies;
    private $enabled;
    private $displayCustomTable;
    private $editPost;
    private $createCustomTable;
    private $editCustomTable;
    private $displayUsers;
    private $editUsers;

    public function getEditUsers()
    {
        return $this->editUsers;
    }

    public function setEditUsers($editUsers)
    {
        $this->editUsers = $editUsers;

        return $this;
    }

    public function getCreateUsers()
    {
        return $this->createUsers;
    }

    public function setCreateUsers($createUsers)
    {
        $this->createUsers = $createUsers;

        return $this;
    }
    private $createUsers;

    public function getDisplayUsers()
    {
        return $this->displayUsers;
    }

    public function setDisplayUsers($displayUsers)
    {
        $this->displayUsers = $displayUsers;

        return $this;
    }

    public function getEditCustomTable()
    {
        return $this->editCustomTable;
    }

    public function setEditCustomTable($editCustomTable)
    {
        $this->editCustomTable = $editCustomTable;

        return $this;
    }

    public function getDeleteCustomTable()
    {
        return $this->deleteCustomTable;
    }

    public function setDeleteCustomTable($deleteCustomTable)
    {
        $this->deleteCustomTable = $deleteCustomTable;

        return $this;
    }
    private $deleteCustomTable;

    public function getCreateCustomTable()
    {
        return $this->createCustomTable;
    }

    public function setCreateCustomTable($createCustomTable)
    {
        $this->createCustomTable = $createCustomTable;

        return $this;
    }

    public function getEditPost()
    {
        return $this->editPost;
    }

    public function setEditPost($editPost)
    {
        $this->editPost = $editPost;

        return $this;
    }

    public function getDisplayCustomTable()
    {
        return $this->displayCustomTable;
    }

    public function setDisplayCustomTable($displayCustomTable)
    {
        $this->displayCustomTable = $displayCustomTable;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDisplayTaxonomies()
    {
        return $this->displayTaxonomies;
    }

    /**
     * @param mixed $displayTaxonomies
     *
     * @return Endpoint
     */
    public function setDisplayTaxonomies($displayTaxonomies)
    {
        $this->displayTaxonomies = $displayTaxonomies;

        return $this;
    }

    /**
     * @return bool
     */
    public function getEnabled()
    {
        return $this->enabled;
    }

    /**
     * @param bool $enabled
     *
     * @return $this
     */
    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDisplayData()
    {
        return $this->displayData;
    }

    /**
     * @param mixed $displayData
     */
    public function setDisplayData($displayData)
    {
        $this->displayData = $displayData;
    }

    /**
     * @return mixed
     */
    public function getCreatePost()
    {
        return $this->createPost;
    }

    /**
     * @param mixed $createPost
     */
    public function setCreatePost($createPost)
    {
        $this->createPost = $createPost;
    }

    /**
     * @return mixed
     */
    public function getAction()
    {
        return $this->action;
    }

    /**
     * @param mixed $action
     */
    public function setAction($action)
    {
        $this->action = $action;
    }

    /**
     * @return mixed
     */
    public function getPermissionCallback()
    {
        return $this->permissionCallback;
    }

    /**
     * @param mixed $permissionCallback
     */
    public function setPermissionCallback($permissionCallback)
    {
        $this->permissionCallback = $permissionCallback;
    }

    /**
     * @return Parameter[]
     */
    public function getParameters()
    {
        return $this->parameters;
    }

    /**
     * @param mixed $parameters
     */
    public function setParameters($parameters)
    {
        $this->parameters = $parameters;
    }

    /**
     * @return mixed
     */
    public function getCapability()
    {
        return $this->capability;
    }

    /**
     * @param mixed $capability
     */
    public function setCapability($capability)
    {
        $this->capability = $capability;
    }

    /**
     * @return mixed
     */
    public function getMethod()
    {
        return $this->method;
    }

    /**
     * @param mixed $method
     */
    public function setMethod($method)
    {
        $this->method = $method;
    }

    /**
     * @return mixed
     */
    public function getCallback()
    {
        return $this->callback;
    }

    /**
     * @param mixed $callback
     */
    public function setCallback($callback)
    {
        $this->callback = $callback;
    }
}
