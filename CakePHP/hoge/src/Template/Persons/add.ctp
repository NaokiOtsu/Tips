<div>
  <h3>Add Person</h3>
  <?= $this->Form->create() ?>
  <fieldset>
  <?php
    echo $this->Form->input('name'); 
    echo $this->Form->input('get'); 
    echo $this->Form->input('mail'); 
  ?>
  </fieldset>
  <?= $this->Form->button('Submit') ?>
  <?= $this->Form->end() ?>
</div>